/**
 *  Schema.org/Apartment
 *  An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).
 * 
 *  @author schema.org
 *  @class Apartment
 *  @module org.schema
 *  @extends Accommodation
 */
var Apartment = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Accommodation.call(this);
    this.context = "http://schema.org/";
    this.type = "Apartment";
};
Apartment = stjs.extend(Apartment, Accommodation, [], function(constructor, prototype) {
    /**
     *  Schema.org/occupancy
     *  The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
     *  Typical unit code(s): C62 for person
     * 
     *  @property occupancy
     *  @type QuantitativeValue
     */
    occupancy = null;
    /**
     *  Schema.org/numberOfRooms
     *  The number of rooms (excluding bathrooms and closets) of the acccommodation or lodging business.
     *  Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
     * 
     *  @property numberOfRooms
     *  @type Number
     */
    numberOfRooms = null;
}, {occupancy: "QuantitativeValue", floorSize: "QuantitativeValue", amenityFeature: "LocationFeatureSpecification", photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
