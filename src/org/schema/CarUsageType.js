/**
 * Schema.org/CarUsageType
 * A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 *
 * @author schema.org
 * @class CarUsageType
 * @module org.schema
 */
module.exports = class CarUsageType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CarUsageType";
	}

}