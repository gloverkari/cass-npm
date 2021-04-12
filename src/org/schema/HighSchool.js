/**
 * Schema.org/HighSchool
 * A high school.
 *
 * @author schema.org
 * @class HighSchool
 * @module org.schema
 */
module.exports = class HighSchool extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "HighSchool";
	}

}