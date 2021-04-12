/**
 * Schema.org/RiverBodyOfWater
 * A river (for example, the broad majestic Shannon).
 *
 * @author schema.org
 * @class RiverBodyOfWater
 * @module org.schema
 */
module.exports = class RiverBodyOfWater extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RiverBodyOfWater";
	}

}