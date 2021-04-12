/**
 * Schema.org/Playground
 * A playground.
 *
 * @author schema.org
 * @class Playground
 * @module org.schema
 */
module.exports = class Playground extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Playground";
	}

}