import Panel from './panel.js';

// Map UI

class Map extends Panel {
  constructor({ world }) {
    const width = 544;
    const height = 544;
    super({
      handedness: 'right',
      pages: [
        {
          labels: [
            {
              text: 'Map',
              font: '700 128px monospace',
              x: 272,
              y: 272,
            },
          ],
        },
        {
          buttons: [
            {
              x: 0,
              y: 0,
              width,
              height,
              isVisible: false,
              onPointer: () => this.setPage(0),
            },
            {
              label: 'Connect',
              font: '700 24px monospace',
              x: width * 0.35,
              y: height * 0.828,
              width: width * 0.3,
              height: width * 0.05,
              isVisible: false,
              onPointer: () => this.connectToServer(),
            },
            {
              label: '<',
              x: width * 0.03,
              y: height * 0.91,
              width: width * 0.06,
              height: width * 0.06,
              onPointer: () => {
                const { displayedServer, servers } = this;
                if (servers) {
                  this.setDisplayedServer(
                    (displayedServer > 0 ? displayedServer : servers.length) - 1
                  );
                }
              },
            },
            {
              label: '>',
              x: width * 0.91,
              y: height * 0.91,
              width: width * 0.06,
              height: width * 0.06,
              onPointer: () => {
                const { displayedServer, servers } = this;
                if (servers) {
                  this.setDisplayedServer(
                    (displayedServer + 1) % servers.length
                  );
                }
              },
            },
          ],
          labels: [
            {
              text: '',
              font: '700 32px monospace',
              x: width * 0.5,
              y: height * 0.94,
            },
          ],
          graphics: [
            ({ ctx }) => {
              const {
                chunk,
                image,
              } = this;
              ctx.fillStyle = '#555';
              ctx.fillRect(0, 0, width, height);
              if (!chunk) {
                return;
              }
              if (image.loaded) {
                ctx.drawImage(image, 0, 0, width, height);
              }
              ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              const radius = 8;
              const size = ((radius * 2) + 1);
              const ratio = width / size;
              ctx.font = `${ratio * 0.3}px monospace`;
              for (let x = 2; x < size; x += 3) {
                ctx.fillText(
                  `${(chunk.x - radius) + x}`,
                  (x + 0.5) * ratio, ratio * 0.5
                );
              }
              for (let z = 2; z < size; z += 3) {
                ctx.fillText(
                  `${(chunk.z - radius) + z}`,
                  width - 1 - (ratio * 0.5), (z + 0.5) * ratio
                );
              }
            },
          ],
        },
      ],
      size: 0.4,
      textureWidth: width,
      textureHeight: height,
    });
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      image.loaded = true;
      if (this.page.id === 1) {
        this.draw();
      }
    };
    this.image = image;
    this.world = world;
    this.loadServers();
  }

  dispose() {
    super.dispose();
    const { image } = this;
    image.onload = null;
  }

  connectToServer() {
    const {
      displayedServer,
      pages,
      servers,
      world,
    } = this;
    const [/* toggle */, { buttons: [/* back */, connect] }] = pages;
    connect.isVisible = false;
    this.connectedServer = displayedServer;
    this.draw();
    world.connect(servers[displayedServer].url);
  }

  loadImage() {
    const {
      chunk,
      connectedServer,
      displayedServer,
      image,
      servers,
    } = this;
    if (!servers) {
      return;
    }
    const isConnected = connectedServer === displayedServer;
    image.src = `${servers[displayedServer].url}map${isConnected ? `/@${chunk.x},${chunk.z}` : ''}`;
  }

  loadServers() {
    const { world } = this;
    fetch(Map.servers)
      .then((res) => res.json())
      .then((list) => {
        const connectedServer = world.server.serverURL;
        const isOnList = list.findIndex(({ url }) => (url === connectedServer));
        if (~isOnList) {
          list.unshift(list.splice(isOnList, 1)[0]);
        } else {
          list.unshift({
            name: new URL(connectedServer).hostname,
            url: connectedServer,
          });
        }
        this.connectedServer = 0;
        this.servers = list;
        this.setDisplayedServer(0);
      });
  }

  setChunk({ x, z }) {
    const { image, page } = this;
    this.chunk = { x, z };
    delete image.loaded;
    if (page.id === 1) {
      this.loadImage();
    }
  }

  setDisplayedServer(index) {
    const {
      chunk,
      connectedServer,
      image,
      page,
      pages,
      servers,
    } = this;
    const [/* toggle */, { buttons: [/* back */, connect], labels: [name] }] = pages;
    connect.isVisible = index !== connectedServer;
    name.text = servers[index].name;
    delete image.loaded;
    this.displayedServer = index;
    if (chunk && page.id === 1) {
      this.loadImage();
    }
  }

  setPage(page) {
    const { image } = this;
    if (page === 1 && !image.loaded) {
      this.loadImage();
    }
    super.setPage(page);
  }
}

Map.servers = 'https://blocks.gatunes.com/auth/servers';

export default Map;
