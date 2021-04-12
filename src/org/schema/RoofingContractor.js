/**
 * Schema.org/RoofingContractor
 * A roofing contractor.
 *
 * @author schema.org
 * @class RoofingContractor
 * @module org.schema
 */
module.exports = class RoofingContractor extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "RoofingContractor";
	}

}