/**
 * Schema.org/VideoObject
 * A video file.
 *
 * @author schema.org
 * @class VideoObject
 * @module org.schema
 */
module.exports = class VideoObject extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "VideoObject";
	}

}