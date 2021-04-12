/**
 *  Implementation of a Competency object with methods for interacting with CASS
 *  services on a server.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class EcCompetency
 *  @constructor
 *  @extends Competency
 */
module.exports = class EcCompetency extends Competency{
    constructor(){
        var me = (this);
        if (EcCompetency.template != null) {
            var you = (EcCompetency.template);
            for (var key in you) {
                if ((typeof you[key]) != "function") 
                    me[key.replace("@", "")] = you[key];
            }
        }
    }
    static relDone = {};
    static levelDone = {};
    static template = null;
    equals(obj) {
        return this.isId((obj).id);
    };
    /**
     *  Retrieves a competency from it's server asynchronously
     * 
     *  @param {String}            id
     *                             ID of the competency to retrieve from the server
     *  @param {Callback1<String>} success
     *                             Callback triggered after retrieving the competency,
     *                             returns the competency retrieved
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error retrieving competency
     *  @memberOf EcCompetency
     *  @method get
     *  @static
     */
    static get(id, success, failure) {
        EcRepository.getAs(id, new EcCompetency(), success, failure);
    };
    /**
     *  Retrieves a competency from it's server synchronously, the call
     *  blocks until it is successful or an error occurs
     * 
     *  @param {String} id
     *                  ID of the competency to retrieve
     *  @return EcCompetency
     *  The competency retrieved
     *  @memberOf EcCompetency
     *  @method getBlocking
     *  @static
     */
    static getBlocking(id) {
        return EcRepository.getBlockingAs(id, new EcCompetency());
    };
    /**
     *  Searches a repository for competencies that match the search query
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search using the query
     *  @param {String}                        query
     *                                         Query string to pass to the search web service
     *  @param {Callback1<Array<EcCompetency>> success
     *                                         Callback triggered after completing the search, returns the results
     *  @param {Callback1<String>}             failure
     *                                         Callback triggered if error searching
     *  @param {Object}                        paramObj
     *                                         Parameter object for search
     *  @memberOf EcCompetency
     *  @method search
     *  @static
     */
    static search(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcCompetency();
        }, success, failure, paramObj);
    };
    /**
     *  Adds a new alignment on the server specified with this competency as its
     *  source and the specified target competency
     * 
     *  @param {EcCompetency}      target
     *                             Competency to be related with
     *  @param {String}            alignmentType
     *                             String defining the relationship type
     *  @param {EcPpk}             owner
     *                             Private Key that will own the relationship created
     *  @param {String}            server
     *                             URL Prefix of the new relationship (Server it will be saved on)
     *  @param {Callback1<String>} success
     *                             Callback triggered after successfully creating and saving the relationship
     *  @param {Callback1<String>} [failure]
     *                             Callback triggered if error creating and saving relationship
     *  @return EcAlignment
     *  Created relationship
     *  @memberOf EcCompetency
     *  @method addAlignment
     */
    addAlignment(target, alignmentType, owner, serverUrl, success, failure, repo) {
        var a = new EcAlignment();
        if (repo == null || repo.selectedServer.indexOf(serverUrl) != -1) 
            a.generateId(serverUrl);
         else 
            a.generateShortId(serverUrl);
        a.source = this.shortId();
        a.target = target.shortId();
        a.relationType = alignmentType;
        a.addOwner(owner.toPk());
        a.save(success, failure, repo);
        return a;
    };
    /**
     *  Searches the repository given for any relationships that contain this competency
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search for relationships
     *  @param {Callback1<EcAlignment>}        eachSuccess
     *                                         Callback triggered for each relationship found
     *  @param {Callback1<String>}             failure
     *                                         Callback triggered if an error finding relationships
     *  @param {Callback1<Array<EcAlignment>>} successAll
     *                                         Callback triggered once all of the relationships have been found
     *  @memberOf EcCompetency
     *  @method relations
     */
    relations(repo, eachSuccess, failure, successAll) {
        this.relationships(repo, eachSuccess, failure, successAll);
    };
    /**
     *  Searches the repository given for any relationships that contain this competency
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search for relationships
     *  @param {Callback1<EcAlignment>}        eachSuccess
     *                                         Callback triggered for each relationship found
     *  @param {Callback1<String>}             failure
     *                                         Callback triggered if an error finding relationships
     *  @param {Callback1<Array<EcAlignment>>} successAll
     *                                         Callback triggered once all of the relationships have been found
     *  @memberOf EcCompetency
     *  @method relations
     *  @deprecated
     */
    relationships(repo, eachSuccess, failure, successAll) {
        EcAlignment.search(repo, "source:\"" + this.id + "\" OR target:\"" + this.id + "\" OR source:\"" + this.shortId() + "\" OR target:\"" + this.shortId() + "\"", function(results) {
            for (var i = 0; i < results.length; i++) 
                eachSuccess(results[i]);
            successAll(results);
        }, failure, new Object());
    };
    /**
     *  Adds a new level on the server specified for this competency.
     * 
     *  @param {String}            name
     *                             Name of the new level to create
     *  @param {String}            description
     *                             Description of the new level to create
     *  @param {String}            owner
     *                             Private key of the owner of the new level
     *  @param {String}            server
     *                             URL Prefix for the new level's ID (Server saved on)
     *  @param {Callback1<String>} success
     *                             Callback triggered after successfully creating and saving the level
     *  @param {Callback1<String>} failure
     *                             Callback triggered if an error creating and saving the level
     *  @return EcLevel
     *  Level created
     *  @memberOf EcCompetency
     *  @method addLevel
     */
    addLevel(name, description, owner, serverUrl, success, failure, repo) {
        var l = new EcLevel();
        if (repo == null || repo.selectedServer.indexOf(serverUrl) != -1) 
            l.generateId(serverUrl);
         else 
            l.generateShortId(serverUrl);
        l.competency = this.shortId();
        l.description = description;
        l.name = name;
        l.addOwner(owner.toPk());
        l.save(success, failure, repo);
        return l;
    };
    /**
     *  Searches the repository given for any levels of this competency
     * 
     *  @param {EcRepository}              repo
     *                                     Repository to search for levels
     *  @param {Callback1<EcLevel>}        success
     *                                     Callback triggered for each level found
     *  @param {Callback1<String>}         failure
     *                                     Callback triggered if an error finding levels
     *  @param {Callback1<Array<EcLevel>>} successAll
     *                                     Callback triggered once all of the levels have been found
     *  @memberOf EcCompetency
     *  @method levels
     */
    levels(repo, eachSuccess, failure, successAll) {
        var query = "competency:\"" + this.id + "\" OR competency:\"" + this.shortId() + "\"";
        EcLevel.search(repo, query, function(results) {
            for (var i = 0; i < results.length; i++) 
                eachSuccess(results[i]);
            successAll(results);
        }, failure, new Object());
    };
    /**
     *  Adds a new rollup rule on the server specified for this competency
     * 
     *  @param {String}            name
     *                             Name of the rollup rule to create
     *  @param {String}            description
     *                             Description of the rollup rule to create
     *  @param {EcPpk}             owner
     *                             Private key that will own the new rollup rule
     *  @param {String}            server
     *                             URL Prefix for the new rollup rule's ID (Server that it will be saved on)
     *  @param {Callback1<String>} success
     *                             Callback triggered if successfully save the rollup rule
     *  @param {Callback1<String>} failure
     *                             Callback triggered fi error during save of rollup rule
     *  @return EcRollupRule
     *  Created rollup rule
     *  @memberOf EcCompetency
     *  @method addRollupRule
     */
    addRollupRule(name, description, owner, serverUrl, success, failure, repo) {
        var r = new EcRollupRule();
        if (repo == null) 
            if (repo == null || repo.selectedServer.indexOf(serverUrl) != -1) 
                r.generateId(serverUrl);
             else 
                r.generateShortId(serverUrl);
        r.competency = this.shortId();
        r.description = description;
        r.name = name;
        r.addOwner(owner.toPk());
        r.save(success, failure, repo);
        return r;
    };
    /**
     *  Searches the repository given for any rollup rules of this competency
     * 
     *  @param {EcRepository}                  repo
     *                                         Repository to search for levels
     *  @param {Callback1<EcRollupRule>}       success
     *                                         Callback triggered for each rollup rule found
     *  @param {Callback1<String>}             failure
     *                                         Callback triggered if an error finding rollup rule
     *  @param {Callback1<Array<EcRollupRule>} successAll
     *                                         Callback triggered once all of the rollup rules have been found
     *  @memberOf EcCompetency
     *  @method rollupRules
     */
    rollupRules(repo, eachSuccess, failure, successAll) {
        var query = "competency:\"" + this.id + "\" OR competency:\"" + this.shortId() + "\"";
        EcRollupRule.search(repo, query, function(results) {
            for (var i = 0; i < results.length; i++) 
                eachSuccess(results[i]);
            successAll(results);
        }, failure, new Object());
    };
    /**
     *  Method to set competency scope
     * 
     *  @param {String} scope
     *                  Scope to set for its competency
     *  @memberOf EcCompetency
     *  @method setScope
     */
    setScope(scope) {
        this.scope = scope;
    };
    /**
     *  Saves the competency details to the server
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successfully saving the competency
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error saving competency
     *  @memberOf EcCompetency
     *  @method save
     */
    save(success, failure, repo) {
        if (this.name == null || this.name == "") {
            var msg = "Competency Name can not be empty";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (repo == null) 
            EcRepository.save(this, success, failure);
         else 
            repo.saveTo(this, success, failure);
    };
    /**
     *  Deletes the competency from the server
     *  <p>
     *  TODO: Delete rollup rules?
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successful deleting the competency
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error deleting the competency
     *  @param {EcRepository}      repo
     *                             Repository to delete from and to check for levels or relationships to delete
     *  @memberOf EcCompetency
     *  @method _delete
     */
    _delete = function(success, failure, repo) {
        var me = this;
        EcRepository.DELETE(this, function(p1) {
            if (repo != null) {
                me.relationships(repo, function(p1) {
                    for (var i = 0; i < EcIdentityManager.ids.length; i++) {
                        if (p1.canEdit(EcIdentityManager.ids[i].ppk.toPk())) {
                            p1._delete(null, function(p1) {
                                if (failure != null) 
                                    failure("Unable to Delete Competency Relation");
                                 else 
                                    console.error("Unable to Delete Competency Relation");
                            });
                            return;
                        }
                    }
                }, failure, function(p1) {
                    if (EcCompetency.levelDone[this.id]) {
                        if (success != null) 
                            success("");
                    } else {
                        EcCompetency.relDone[this.id] = true;
                    }
                });
                me.levels(repo, function(p1) {
                    for (var i = 0; i < EcIdentityManager.ids.length; i++) {
                        if (p1.canEdit(EcIdentityManager.ids[i].ppk.toPk())) {
                            p1._delete(null, function(p1) {
                                if (failure != null) 
                                    failure("Unable to Delete Competency Relation");
                                 else 
                                    console.error("Unable to Delete Competency Relation");
                            });
                            return;
                        }
                    }
                }, failure, function(p1) {
                    if (EcCompetency.relDone[this.id]) {
                        if (success != null) 
                            success("");
                    } else {
                        EcCompetency.levelDone[this.id] = true;
                    }
                });
            } else {
                if (success != null) 
                    success(p1);
            }
        }, failure);
    };
};
