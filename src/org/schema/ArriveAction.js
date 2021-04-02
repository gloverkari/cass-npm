/**
 *  Schema.org/ArriveAction
 *  The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.
 * 
 *  @author schema.org
 *  @class ArriveAction
 *  @module org.schema
 *  @extends MoveAction
 */
var ArriveAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MoveAction.call(this);
    this.context = "http://schema.org/";
    this.type = "ArriveAction";
};
ArriveAction = stjs.extend(ArriveAction, MoveAction, [], null, {toLocation: "Place", fromLocation: "Place", result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});