/**
 * Schema.org/AMRadioChannel
 * A radio channel that uses AM.
 *
 * @author schema.org
 * @class AMRadioChannel
 * @module org.schema
 */
module.exports = class AMRadioChannel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AMRadioChannel";
	}

}