/**
 * Schema.org/MedicalProcedureType
 * An enumeration that describes different types of medical procedures.
 *
 * @author schema.org
 * @class MedicalProcedureType
 * @module org.schema
 */
module.exports = class MedicalProcedureType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalProcedureType";
	}

}