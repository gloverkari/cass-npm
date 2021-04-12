/**
 * Schema.org/GeoCoordinates
 * The geographic coordinates of a place or event.
 *
 * @author schema.org
 * @class GeoCoordinates
 * @module org.schema
 */
module.exports = class GeoCoordinates extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GeoCoordinates";
	}

}