/**
 * Schema.org/RecyclingCenter
 * A recycling center.
 *
 * @author schema.org
 * @class RecyclingCenter
 * @module org.schema
 */
module.exports = class RecyclingCenter extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RecyclingCenter";
	}

}