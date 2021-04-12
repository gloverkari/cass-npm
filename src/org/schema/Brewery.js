/**
 * Schema.org/Brewery
 * Brewery.
 *
 * @author schema.org
 * @class Brewery
 * @module org.schema
 */
module.exports = class Brewery extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Brewery";
	}

}