/* eslint-disable */
import $protobuf from "./protobuf.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protocol = $root.protocol = (() => {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    const protocol = {};

    protocol.Geometry = (function() {

        /**
         * Properties of a Geometry.
         * @memberof protocol
         * @interface IGeometry
         * @property {Uint8Array|null} [color] Geometry color
         * @property {Uint8Array|null} [light] Geometry light
         * @property {Uint8Array|null} [position] Geometry position
         */

        /**
         * Constructs a new Geometry.
         * @memberof protocol
         * @classdesc Represents a Geometry.
         * @implements IGeometry
         * @constructor
         * @param {protocol.IGeometry=} [properties] Properties to set
         */
        function Geometry(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Geometry color.
         * @member {Uint8Array} color
         * @memberof protocol.Geometry
         * @instance
         */
        Geometry.prototype.color = $util.newBuffer([]);

        /**
         * Geometry light.
         * @member {Uint8Array} light
         * @memberof protocol.Geometry
         * @instance
         */
        Geometry.prototype.light = $util.newBuffer([]);

        /**
         * Geometry position.
         * @member {Uint8Array} position
         * @memberof protocol.Geometry
         * @instance
         */
        Geometry.prototype.position = $util.newBuffer([]);

        /**
         * Creates a new Geometry instance using the specified properties.
         * @function create
         * @memberof protocol.Geometry
         * @static
         * @param {protocol.IGeometry=} [properties] Properties to set
         * @returns {protocol.Geometry} Geometry instance
         */
        Geometry.create = function create(properties) {
            return new Geometry(properties);
        };

        /**
         * Encodes the specified Geometry message. Does not implicitly {@link protocol.Geometry.verify|verify} messages.
         * @function encode
         * @memberof protocol.Geometry
         * @static
         * @param {protocol.IGeometry} message Geometry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Geometry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.color);
            if (message.light != null && Object.hasOwnProperty.call(message, "light"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.light);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.position);
            return writer;
        };

        /**
         * Encodes the specified Geometry message, length delimited. Does not implicitly {@link protocol.Geometry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Geometry
         * @static
         * @param {protocol.IGeometry} message Geometry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Geometry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Geometry message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Geometry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Geometry} Geometry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Geometry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Geometry();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.color = reader.bytes();
                    break;
                case 2:
                    message.light = reader.bytes();
                    break;
                case 3:
                    message.position = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Geometry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Geometry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Geometry} Geometry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Geometry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Geometry message.
         * @function verify
         * @memberof protocol.Geometry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Geometry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.color != null && message.hasOwnProperty("color"))
                if (!(message.color && typeof message.color.length === "number" || $util.isString(message.color)))
                    return "color: buffer expected";
            if (message.light != null && message.hasOwnProperty("light"))
                if (!(message.light && typeof message.light.length === "number" || $util.isString(message.light)))
                    return "light: buffer expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!(message.position && typeof message.position.length === "number" || $util.isString(message.position)))
                    return "position: buffer expected";
            return null;
        };

        /**
         * Creates a Geometry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Geometry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Geometry} Geometry
         */
        Geometry.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Geometry)
                return object;
            let message = new $root.protocol.Geometry();
            if (object.color != null)
                if (typeof object.color === "string")
                    $util.base64.decode(object.color, message.color = $util.newBuffer($util.base64.length(object.color)), 0);
                else if (object.color.length)
                    message.color = object.color;
            if (object.light != null)
                if (typeof object.light === "string")
                    $util.base64.decode(object.light, message.light = $util.newBuffer($util.base64.length(object.light)), 0);
                else if (object.light.length)
                    message.light = object.light;
            if (object.position != null)
                if (typeof object.position === "string")
                    $util.base64.decode(object.position, message.position = $util.newBuffer($util.base64.length(object.position)), 0);
                else if (object.position.length)
                    message.position = object.position;
            return message;
        };

        /**
         * Creates a plain object from a Geometry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Geometry
         * @static
         * @param {protocol.Geometry} message Geometry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Geometry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.color = "";
                else {
                    object.color = [];
                    if (options.bytes !== Array)
                        object.color = $util.newBuffer(object.color);
                }
                if (options.bytes === String)
                    object.light = "";
                else {
                    object.light = [];
                    if (options.bytes !== Array)
                        object.light = $util.newBuffer(object.light);
                }
                if (options.bytes === String)
                    object.position = "";
                else {
                    object.position = [];
                    if (options.bytes !== Array)
                        object.position = $util.newBuffer(object.position);
                }
            }
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = options.bytes === String ? $util.base64.encode(message.color, 0, message.color.length) : options.bytes === Array ? Array.prototype.slice.call(message.color) : message.color;
            if (message.light != null && message.hasOwnProperty("light"))
                object.light = options.bytes === String ? $util.base64.encode(message.light, 0, message.light.length) : options.bytes === Array ? Array.prototype.slice.call(message.light) : message.light;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = options.bytes === String ? $util.base64.encode(message.position, 0, message.position.length) : options.bytes === Array ? Array.prototype.slice.call(message.position) : message.position;
            return object;
        };

        /**
         * Converts this Geometry to JSON.
         * @function toJSON
         * @memberof protocol.Geometry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Geometry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Geometry;
    })();

    protocol.Mesh = (function() {

        /**
         * Properties of a Mesh.
         * @memberof protocol
         * @interface IMesh
         * @property {protocol.IGeometry|null} [opaque] Mesh opaque
         * @property {protocol.IGeometry|null} [transparent] Mesh transparent
         */

        /**
         * Constructs a new Mesh.
         * @memberof protocol
         * @classdesc Represents a Mesh.
         * @implements IMesh
         * @constructor
         * @param {protocol.IMesh=} [properties] Properties to set
         */
        function Mesh(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mesh opaque.
         * @member {protocol.IGeometry|null|undefined} opaque
         * @memberof protocol.Mesh
         * @instance
         */
        Mesh.prototype.opaque = null;

        /**
         * Mesh transparent.
         * @member {protocol.IGeometry|null|undefined} transparent
         * @memberof protocol.Mesh
         * @instance
         */
        Mesh.prototype.transparent = null;

        /**
         * Creates a new Mesh instance using the specified properties.
         * @function create
         * @memberof protocol.Mesh
         * @static
         * @param {protocol.IMesh=} [properties] Properties to set
         * @returns {protocol.Mesh} Mesh instance
         */
        Mesh.create = function create(properties) {
            return new Mesh(properties);
        };

        /**
         * Encodes the specified Mesh message. Does not implicitly {@link protocol.Mesh.verify|verify} messages.
         * @function encode
         * @memberof protocol.Mesh
         * @static
         * @param {protocol.IMesh} message Mesh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mesh.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.opaque != null && Object.hasOwnProperty.call(message, "opaque"))
                $root.protocol.Geometry.encode(message.opaque, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.transparent != null && Object.hasOwnProperty.call(message, "transparent"))
                $root.protocol.Geometry.encode(message.transparent, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Mesh message, length delimited. Does not implicitly {@link protocol.Mesh.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Mesh
         * @static
         * @param {protocol.IMesh} message Mesh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mesh.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Mesh message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Mesh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Mesh} Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mesh.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Mesh();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.opaque = $root.protocol.Geometry.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.transparent = $root.protocol.Geometry.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Mesh message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Mesh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Mesh} Mesh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mesh.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Mesh message.
         * @function verify
         * @memberof protocol.Mesh
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Mesh.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.opaque != null && message.hasOwnProperty("opaque")) {
                let error = $root.protocol.Geometry.verify(message.opaque);
                if (error)
                    return "opaque." + error;
            }
            if (message.transparent != null && message.hasOwnProperty("transparent")) {
                let error = $root.protocol.Geometry.verify(message.transparent);
                if (error)
                    return "transparent." + error;
            }
            return null;
        };

        /**
         * Creates a Mesh message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Mesh
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Mesh} Mesh
         */
        Mesh.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Mesh)
                return object;
            let message = new $root.protocol.Mesh();
            if (object.opaque != null) {
                if (typeof object.opaque !== "object")
                    throw TypeError(".protocol.Mesh.opaque: object expected");
                message.opaque = $root.protocol.Geometry.fromObject(object.opaque);
            }
            if (object.transparent != null) {
                if (typeof object.transparent !== "object")
                    throw TypeError(".protocol.Mesh.transparent: object expected");
                message.transparent = $root.protocol.Geometry.fromObject(object.transparent);
            }
            return message;
        };

        /**
         * Creates a plain object from a Mesh message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Mesh
         * @static
         * @param {protocol.Mesh} message Mesh
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Mesh.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.opaque = null;
                object.transparent = null;
            }
            if (message.opaque != null && message.hasOwnProperty("opaque"))
                object.opaque = $root.protocol.Geometry.toObject(message.opaque, options);
            if (message.transparent != null && message.hasOwnProperty("transparent"))
                object.transparent = $root.protocol.Geometry.toObject(message.transparent, options);
            return object;
        };

        /**
         * Converts this Mesh to JSON.
         * @function toJSON
         * @memberof protocol.Mesh
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Mesh.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Mesh;
    })();

    protocol.Chunk = (function() {

        /**
         * Properties of a Chunk.
         * @memberof protocol
         * @interface IChunk
         * @property {number|null} [x] Chunk x
         * @property {number|null} [z] Chunk z
         * @property {Array.<protocol.IMesh>|null} [meshes] Chunk meshes
         */

        /**
         * Constructs a new Chunk.
         * @memberof protocol
         * @classdesc Represents a Chunk.
         * @implements IChunk
         * @constructor
         * @param {protocol.IChunk=} [properties] Properties to set
         */
        function Chunk(properties) {
            this.meshes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chunk x.
         * @member {number} x
         * @memberof protocol.Chunk
         * @instance
         */
        Chunk.prototype.x = 0;

        /**
         * Chunk z.
         * @member {number} z
         * @memberof protocol.Chunk
         * @instance
         */
        Chunk.prototype.z = 0;

        /**
         * Chunk meshes.
         * @member {Array.<protocol.IMesh>} meshes
         * @memberof protocol.Chunk
         * @instance
         */
        Chunk.prototype.meshes = $util.emptyArray;

        /**
         * Creates a new Chunk instance using the specified properties.
         * @function create
         * @memberof protocol.Chunk
         * @static
         * @param {protocol.IChunk=} [properties] Properties to set
         * @returns {protocol.Chunk} Chunk instance
         */
        Chunk.create = function create(properties) {
            return new Chunk(properties);
        };

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link protocol.Chunk.verify|verify} messages.
         * @function encode
         * @memberof protocol.Chunk
         * @static
         * @param {protocol.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chunk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.z);
            if (message.meshes != null && message.meshes.length)
                for (let i = 0; i < message.meshes.length; ++i)
                    $root.protocol.Mesh.encode(message.meshes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Chunk message, length delimited. Does not implicitly {@link protocol.Chunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Chunk
         * @static
         * @param {protocol.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Chunk();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.z = reader.int32();
                    break;
                case 3:
                    if (!(message.meshes && message.meshes.length))
                        message.meshes = [];
                    message.meshes.push($root.protocol.Mesh.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chunk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chunk message.
         * @function verify
         * @memberof protocol.Chunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chunk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (!$util.isInteger(message.z))
                    return "z: integer expected";
            if (message.meshes != null && message.hasOwnProperty("meshes")) {
                if (!Array.isArray(message.meshes))
                    return "meshes: array expected";
                for (let i = 0; i < message.meshes.length; ++i) {
                    let error = $root.protocol.Mesh.verify(message.meshes[i]);
                    if (error)
                        return "meshes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Chunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Chunk} Chunk
         */
        Chunk.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Chunk)
                return object;
            let message = new $root.protocol.Chunk();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.z != null)
                message.z = object.z | 0;
            if (object.meshes) {
                if (!Array.isArray(object.meshes))
                    throw TypeError(".protocol.Chunk.meshes: array expected");
                message.meshes = [];
                for (let i = 0; i < object.meshes.length; ++i) {
                    if (typeof object.meshes[i] !== "object")
                        throw TypeError(".protocol.Chunk.meshes: object expected");
                    message.meshes[i] = $root.protocol.Mesh.fromObject(object.meshes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Chunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Chunk
         * @static
         * @param {protocol.Chunk} message Chunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chunk.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.meshes = [];
            if (options.defaults) {
                object.x = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = message.z;
            if (message.meshes && message.meshes.length) {
                object.meshes = [];
                for (let j = 0; j < message.meshes.length; ++j)
                    object.meshes[j] = $root.protocol.Mesh.toObject(message.meshes[j], options);
            }
            return object;
        };

        /**
         * Converts this Chunk to JSON.
         * @function toJSON
         * @memberof protocol.Chunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chunk;
    })();

    protocol.Signal = (function() {

        /**
         * Properties of a Signal.
         * @memberof protocol
         * @interface ISignal
         * @property {string|null} [peer] Signal peer
         * @property {string|null} [signal] Signal signal
         */

        /**
         * Constructs a new Signal.
         * @memberof protocol
         * @classdesc Represents a Signal.
         * @implements ISignal
         * @constructor
         * @param {protocol.ISignal=} [properties] Properties to set
         */
        function Signal(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signal peer.
         * @member {string} peer
         * @memberof protocol.Signal
         * @instance
         */
        Signal.prototype.peer = "";

        /**
         * Signal signal.
         * @member {string} signal
         * @memberof protocol.Signal
         * @instance
         */
        Signal.prototype.signal = "";

        /**
         * Creates a new Signal instance using the specified properties.
         * @function create
         * @memberof protocol.Signal
         * @static
         * @param {protocol.ISignal=} [properties] Properties to set
         * @returns {protocol.Signal} Signal instance
         */
        Signal.create = function create(properties) {
            return new Signal(properties);
        };

        /**
         * Encodes the specified Signal message. Does not implicitly {@link protocol.Signal.verify|verify} messages.
         * @function encode
         * @memberof protocol.Signal
         * @static
         * @param {protocol.ISignal} message Signal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.peer != null && Object.hasOwnProperty.call(message, "peer"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.peer);
            if (message.signal != null && Object.hasOwnProperty.call(message, "signal"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.signal);
            return writer;
        };

        /**
         * Encodes the specified Signal message, length delimited. Does not implicitly {@link protocol.Signal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Signal
         * @static
         * @param {protocol.ISignal} message Signal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signal message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Signal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Signal} Signal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Signal();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.peer = reader.string();
                    break;
                case 2:
                    message.signal = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Signal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Signal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Signal} Signal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signal message.
         * @function verify
         * @memberof protocol.Signal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.peer != null && message.hasOwnProperty("peer"))
                if (!$util.isString(message.peer))
                    return "peer: string expected";
            if (message.signal != null && message.hasOwnProperty("signal"))
                if (!$util.isString(message.signal))
                    return "signal: string expected";
            return null;
        };

        /**
         * Creates a Signal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Signal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Signal} Signal
         */
        Signal.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Signal)
                return object;
            let message = new $root.protocol.Signal();
            if (object.peer != null)
                message.peer = String(object.peer);
            if (object.signal != null)
                message.signal = String(object.signal);
            return message;
        };

        /**
         * Creates a plain object from a Signal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Signal
         * @static
         * @param {protocol.Signal} message Signal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.peer = "";
                object.signal = "";
            }
            if (message.peer != null && message.hasOwnProperty("peer"))
                object.peer = message.peer;
            if (message.signal != null && message.hasOwnProperty("signal"))
                object.signal = message.signal;
            return object;
        };

        /**
         * Converts this Signal to JSON.
         * @function toJSON
         * @memberof protocol.Signal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Signal;
    })();

    protocol.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof protocol
         * @interface IMessage
         * @property {string|null} [type] Message type
         * @property {string|null} [json] Message json
         * @property {string|null} [text] Message text
         * @property {Array.<protocol.IChunk>|null} [chunks] Message chunks
         * @property {protocol.ISignal|null} [signal] Message signal
         */

        /**
         * Constructs a new Message.
         * @memberof protocol
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {protocol.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            this.chunks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message type.
         * @member {string} type
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.type = "";

        /**
         * Message json.
         * @member {string} json
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.json = "";

        /**
         * Message text.
         * @member {string} text
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.text = "";

        /**
         * Message chunks.
         * @member {Array.<protocol.IChunk>} chunks
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.chunks = $util.emptyArray;

        /**
         * Message signal.
         * @member {protocol.ISignal|null|undefined} signal
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.signal = null;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage=} [properties] Properties to set
         * @returns {protocol.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @function encode
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.json);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            if (message.chunks != null && message.chunks.length)
                for (let i = 0; i < message.chunks.length; ++i)
                    $root.protocol.Chunk.encode(message.chunks[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.signal != null && Object.hasOwnProperty.call(message, "signal"))
                $root.protocol.Signal.encode(message.signal, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.json = reader.string();
                    break;
                case 3:
                    message.text = reader.string();
                    break;
                case 4:
                    if (!(message.chunks && message.chunks.length))
                        message.chunks = [];
                    message.chunks.push($root.protocol.Chunk.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.signal = $root.protocol.Signal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof protocol.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.json != null && message.hasOwnProperty("json"))
                if (!$util.isString(message.json))
                    return "json: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.chunks != null && message.hasOwnProperty("chunks")) {
                if (!Array.isArray(message.chunks))
                    return "chunks: array expected";
                for (let i = 0; i < message.chunks.length; ++i) {
                    let error = $root.protocol.Chunk.verify(message.chunks[i]);
                    if (error)
                        return "chunks." + error;
                }
            }
            if (message.signal != null && message.hasOwnProperty("signal")) {
                let error = $root.protocol.Signal.verify(message.signal);
                if (error)
                    return "signal." + error;
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Message)
                return object;
            let message = new $root.protocol.Message();
            if (object.type != null)
                message.type = String(object.type);
            if (object.json != null)
                message.json = String(object.json);
            if (object.text != null)
                message.text = String(object.text);
            if (object.chunks) {
                if (!Array.isArray(object.chunks))
                    throw TypeError(".protocol.Message.chunks: array expected");
                message.chunks = [];
                for (let i = 0; i < object.chunks.length; ++i) {
                    if (typeof object.chunks[i] !== "object")
                        throw TypeError(".protocol.Message.chunks: object expected");
                    message.chunks[i] = $root.protocol.Chunk.fromObject(object.chunks[i]);
                }
            }
            if (object.signal != null) {
                if (typeof object.signal !== "object")
                    throw TypeError(".protocol.Message.signal: object expected");
                message.signal = $root.protocol.Signal.fromObject(object.signal);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Message
         * @static
         * @param {protocol.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.chunks = [];
            if (options.defaults) {
                object.type = "";
                object.json = "";
                object.text = "";
                object.signal = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = message.json;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.chunks && message.chunks.length) {
                object.chunks = [];
                for (let j = 0; j < message.chunks.length; ++j)
                    object.chunks[j] = $root.protocol.Chunk.toObject(message.chunks[j], options);
            }
            if (message.signal != null && message.hasOwnProperty("signal"))
                object.signal = $root.protocol.Signal.toObject(message.signal, options);
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof protocol.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    return protocol;
})();

export { $root as default };
