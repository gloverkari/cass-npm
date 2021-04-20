/**
 * Schema.org/Report
 * A Report generated by governmental or non-governmental organization.
 *
 * @author schema.org
 * @class Report
 * @module org.schema
 */
module.exports = class Report extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Report");
	}

}