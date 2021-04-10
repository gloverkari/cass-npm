/**
 *  @author debbie.brown@eduworks.com
 */
var ExtContent = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    CreativeWork.call(this);
    this.context = "http://schema.eduworks.com/pebleXtension/0.1/";
    this.type = "Content";
};
ExtContent = stjs.extend(ExtContent, CreativeWork, [], function(constructor, prototype) {
    legacyId = null;
    /**
     *  Retrieves the content specified with the ID from the server
     * 
     *  @param {String}               id
     *                                ID of the content to retrieve
     *  @param {Callback1<ExtContent>} success
     *                                Callback triggered on successfully retrieving the content,
     *                                returns the content
     *  @param {Callback1<String>}    [failure]
     *                                Callback triggered if error while retrieving content
     *  @memberOf ExtContent
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.get(id, function(p1) {
            if (stjs.isInstanceOf(p1.constructor, ExtContent)) 
                if (success != null) {
                    success(p1);
                    return;
                }
            var content = new ExtContent();
            if (p1.isA(EcEncryptedValue.myType)) {
                var encrypted = new EcEncryptedValue();
                encrypted.copyFrom(p1);
                p1 = encrypted.decryptIntoObject();
            }
            if (p1.isAny(content.getTypes())) {
                content.copyFrom(p1);
                if (EcRepository.caching) {
                    (EcRepository.cache)[content.shortId()] = content;
                    (EcRepository.cache)[content.id] = content;
                }
                if (success != null) 
                    success(content);
            } else {
                var msg = "Resultant object is not a content.";
                if (failure != null) 
                    failure(msg);
                 else 
                    console.error(msg);
            }
        }, failure);
    };
    /**
     *  Retrieves a content from the server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the content to retrieve
     *  @return ExtContent
     *  The content retrieved
     *  @memberOf ExtContent
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        var p1 = EcRepository.getBlocking(id);
        if (stjs.isInstanceOf(p1.constructor, ExtContent)) 
            return p1;
        var content = new ExtContent();
        if (p1.isA(EcEncryptedValue.myType)) {
            var encrypted = new EcEncryptedValue();
            encrypted.copyFrom(p1);
            p1 = encrypted.decryptIntoObject();
            EcEncryptedValue.encryptOnSave(p1.id, true);
        }
        if (p1.isAny(content.getTypes())) {
            content.copyFrom(p1);
            if (EcRepository.caching) {
                (EcRepository.cache)[content.shortId()] = content;
                (EcRepository.cache)[content.id] = content;
            }
            return content;
        } else {
            var msg = "Retrieved object was not a content";
            console.error(msg);
            return null;
        }
    };
    /**
     *  Searches the repository using the query and optional parameters provided
     * 
     *  @param {EcRepository}                repo
     *                                       Repository to search using the query provided
     *  @param {String}                      query
     *                                       The query to send to the search
     *  @param {Callback1<Array<ExtContent>>} success
     *                                       Callback triggered on successful search return
     *  @param {Callback1<String>}           [failure]
     *                                       Callback triggered if error searching
     *  @param {Object}                      [paramObj]
     *                                       Parameters to include in the search
     *  @param start
     *  @param size
     *  @memberOf ExtContent
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        var queryAdd = new ExtContent().getSearchStringByType();
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                p1.forEach(function(rld) {
                    var content = new ExtContent();
                    content.copyFrom(rld);
                    ret.push(content);
                });
                success(ret);
            }
        }, failure);
    };
    /**
     *  Saves this content on the server corresponding to its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the ExtContent
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error while saving ExtContent
     *  @return {ExtContent}
     *  @memberOf ExtContent
     *  @method save
     */
    save(success, failure) {
        if (this.getId() == null || this.getId() == "") {
            var msg = "ID cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getTitle() == null || this.getTitle() == "") {
            var msg = "Title cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getDescription() == null || this.getDescription() == "") {
            var msg = "Description cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getLaunchURL() == null || this.getLaunchURL() == "") {
            var msg = "Launch URL cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        if (this.getInstitution() == null || this.getInstitution().name == null || this.getInstitution().name == "") {
            var msg = "Institution name cannot be missing";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return null;
        }
        EcRepository.save(this, success, failure);
        return "Content " + this.getId() + " saved.";
    };
    /**
     *  Deletes the content from the server corresponding to its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully deleting the content
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error while deleting content
     *  @memberOf ExtContent
     *  @method _delete
     */
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
    /**
     *  Returns the ID of the content
     * 
     *  @return {String}
     *  ID of content
     */
    getId() {
        return this.id;
    };
    /**
     *  Sets the ID of the content
     * 
     *  @param {String} id
     *                  ID of the content
     */
    setId(id) {
        this.id = id;
    };
    /**
     *  Returns the legacyId of the content
     * 
     *  @return {String}
     *  legacyId of content
     */
    getLegacyId() {
        return this.legacyId;
    };
    /**
     *  Sets the legacyId of the content
     * 
     *  @param {String} id
     *                  legacyId of the content
     */
    setLegacyId(id) {
        this.legacyId = id;
    };
    /**
     *  Returns the author of the content
     * 
     *  @return {Person}
     *  author of content
     */
    getAuthor() {
        return this.author;
    };
    /**
     *  Sets the author of the content
     * 
     *  @param {Person} creator
     */
    setAuthor(creator) {
        this.author = creator;
    };
    /**
     *  Returns the title of the content
     * 
     *  @return {String}
     *  title of content
     */
    getTitle() {
        return this.name;
    };
    /**
     *  Sets the title of the content
     * 
     *  @param {String} title
     *                  title of the content
     */
    setTitle(title) {
        this.name = title;
    };
    /**
     *  Returns the description of the content
     * 
     *  @return {String}
     *  description of content
     */
    getDescription() {
        return this.description;
    };
    /**
     *  Sets the description of the content
     * 
     *  @param {String} description
     *                  description of the content
     */
    setDescription(description) {
        this.description = description;
    };
    /**
     *  Returns the genre/category of the content
     * 
     *  @return {String}
     *  genre of content
     */
    getCategory() {
        return this.genre;
    };
    /**
     *  Sets the genre/category of the content
     * 
     *  @param {String} name
     *                  category of the content
     */
    setCategory(name) {
        this.genre = name;
    };
    /**
     *  Returns the institution of the content
     * 
     *  @return {Organization}
     *  publisher of content
     */
    getInstitution() {
        return this.publisher;
    };
    /**
     *  Sets the institution of the content
     * 
     *  @param {Organization} institution
     *                        institution of the content
     */
    setInstitution(institution) {
        this.publisher = institution;
    };
    /**
     *  Returns the content's launch URL
     * 
     *  @return {String}
     *  launch url of content
     */
    getLaunchURL() {
        return this.sameAs;
    };
    /**
     *  Sets the web page URL of the content
     * 
     *  @param {String} page
     *                  Launch url of the content
     */
    setLaunchURL(page) {
        this.sameAs = page;
    };
    /**
     *  Returns the content object URL
     * 
     *  @return {String}
     *  url of content object
     */
    getUrl() {
        return this.url;
    };
    /**
     *  Sets the content object URL
     * 
     *  @param {String} url
     *                  url of the content object
     */
    setUrl(url) {
        this.url = url;
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
