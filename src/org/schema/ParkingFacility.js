/**
 * Schema.org/ParkingFacility
 * A parking lot or other parking facility.
 *
 * @author schema.org
 * @class ParkingFacility
 * @module org.schema
 */
module.exports = class ParkingFacility extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ParkingFacility";
	}

}