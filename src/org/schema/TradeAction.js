/**
 *  Schema.org/TradeAction
 *  The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.
 * 
 *  @author schema.org
 *  @class TradeAction
 *  @module org.schema
 *  @extends Action
 */
var TradeAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Action.call(this);
    this.context = "http://schema.org/";
    this.type = "TradeAction";
};
TradeAction = stjs.extend(TradeAction, Action, [], function(constructor, prototype) {
    /**
     *  Schema.org/priceSpecification
     *  One or more detailed price specifications, indicating the unit price and delivery or payment charges.
     * 
     *  @property priceSpecification
     *  @type PriceSpecification
     */
    priceSpecification = null;
    /**
     *  Schema.org/price
     *  The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with [ISO 4217 codes](http://en.wikipedia.org/wiki/ISO_4217#Active_codes) e.g. "USD") instead of
     *  including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
     * 
     *  @property price
     *  @type Number
     */
    price = null;
}, {priceSpecification: "PriceSpecification", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
