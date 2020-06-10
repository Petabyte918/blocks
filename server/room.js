const path = require('path');
const protobuf = require('protobufjs');
const { v4: uuid } = require('uuid');

const Message = protobuf
  .loadSync(path.join(__dirname, 'messages.proto'))
  .lookupType('protocol.Message');

class Room {
  constructor({ maxClients }) {
    this.clients = [];
    this.maxClients = maxClients;
  }

  onClose(client) {
    const { clients, pingInterval } = this;
    const index = clients.findIndex(({ id }) => (id === client.id));
    if (~index) {
      clients.splice(index, 1);
      this.broadcast({
        type: 'LEAVE',
        text: client.id,
      });
      if (!clients.length && pingInterval) {
        clearInterval(pingInterval);
        delete this.pingInterval;
      }
    }
  }

  onClient(client) {
    const { clients, maxClients, pingInterval } = this;
    if (clients.length >= maxClients) {
      client.send(Room.encode({
        type: 'ERROR',
        text: 'Server is full. Try again later.',
      }), () => {});
      client.terminate();
      return;
    }
    client.id = uuid();
    client.send(Room.encode({
      type: 'INIT',
      json: {
        peers: clients.map(({ id }) => (id)),
        ...(this.onInit ? this.onInit(client) : {}),
      },
    }), () => {});
    this.broadcast({
      type: 'JOIN',
      text: client.id,
    });
    clients.push(client);
    client.isAlive = true;
    client.once('close', () => this.onClose(client));
    client.on('message', (data) => this.onMessage(client, data));
    client.on('pong', () => {
      client.isAlive = true;
    });
    if (!pingInterval) {
      this.pingInterval = setInterval(this.ping.bind(this), 60000);
    }
  }

  onMessage(client, data) {
    let request;
    try {
      request = Room.decode(data);
    } catch (e) {
      return;
    }
    this.onRequest(client, request);
  }

  onRequest(client, request) {
    const { clients } = this;
    switch (request.type) {
      case 'SIGNAL': {
        let { peer, signal } = request.signal || {};
        peer = `${peer}`;
        signal = `${signal}`;
        if (!(
          !peer
          || !signal
          || clients.findIndex(({ id }) => (id === peer)) === -1
        )) {
          if (client) {
            this.broadcast({
              type: 'SIGNAL',
              signal: {
                peer: client.id,
                signal,
              },
            }, {
              include: peer,
            });
          }
        }
        break;
      }
      default:
        break;
    }
  }

  broadcast(event, { exclude, include } = {}) {
    const { clients } = this;
    const encoded = Room.encode(event);
    if (exclude && !Array.isArray(exclude)) {
      exclude = [exclude];
    }
    if (include && !Array.isArray(include)) {
      include = [include];
    }
    clients.forEach((client) => {
      if (
        (!include || ~include.indexOf(client.id))
        && (!exclude || exclude.indexOf(client.id) === -1)
      ) {
        client.send(encoded, () => {});
      }
    });
  }

  ping() {
    const { clients } = this;
    clients.forEach((client) => {
      if (client.isAlive === false) {
        client.terminate();
        return;
      }
      client.isAlive = false;
      client.ping(() => {});
    });
  }

  static decode(buffer) {
    const message = Message.decode(buffer);
    message.type = Message.Type[message.type];
    if (message.json) {
      message.json = JSON.parse(message.json);
    }
    return message;
  }

  static encode(message) {
    message.type = Message.Type[message.type];
    if (message.json) {
      message.json = JSON.stringify(message.json);
    }
    return Message.encode(Message.create(message)).finish();
  }
}

module.exports = Room;
