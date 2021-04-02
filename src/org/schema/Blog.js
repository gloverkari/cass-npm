/**
 *  Schema.org/Blog
 *  A blog.
 * 
 *  @author schema.org
 *  @class Blog
 *  @module org.schema
 *  @extends CreativeWork
 */
var Blog = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.org/";
    this.type = "Blog";
};
Blog = stjs.extend(Blog, CreativeWork, [], function(constructor, prototype) {
    /**
     *  Schema.org/blogPosts
     *  The postings that are part of this blog.
     * 
     *  @property blogPosts
     *  @type BlogPosting
     */
    prototype.blogPosts = null;
    /**
     *  Schema.org/blogPost
     *  A posting that is part of this blog.
     * 
     *  @property blogPost
     *  @type BlogPosting
     */
    prototype.blogPost = null;
}, {blogPosts: "BlogPosting", blogPost: "BlogPosting", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});