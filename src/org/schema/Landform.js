/**
 *  Schema.org/Landform
 *  A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.
 * 
 *  @author schema.org
 *  @class Landform
 *  @module org.schema
 *  @extends Place
 */
var Landform = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Place.call(this);
    this.context = "http://schema.org/";
    this.type = "Landform";
};
Landform = stjs.extend(Landform, Place, [], null, {photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});