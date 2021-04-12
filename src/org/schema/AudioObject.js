/**
 * Schema.org/AudioObject
 * An audio file.
 *
 * @author schema.org
 * @class AudioObject
 * @module org.schema
 */
module.exports = class AudioObject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AudioObject";
	}

}