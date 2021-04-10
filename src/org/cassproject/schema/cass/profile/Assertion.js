/**
 *  A claim of competence in CASS is called an Assertion. It states with some confidence that an individual has mastered a competency at a given level, provides evidence of such mastery, and records data such as the time of assertion and the party making the assertion.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Assertion
 *  @module org.cassproject
 *  @extends CreativeWork
 */
var Assertion = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, Assertion.myType);
};
Assertion = stjs.extend(Assertion, CreativeWork, [], function(constructor, prototype) {
    static TYPE_0_1 = "http://schema.eduworks.com/cass/0.1/assertion";
    static TYPE_0_2 = "http://schema.eduworks.com/cass/0.2/assertion";
    static TYPE_0_3 = "http://schema.cassproject.org/0.2/Assertion";
    static TYPE_0_4 = "http://schema.cassproject.org/0.3/Assertion";
    static TYPE_0_5 = "https://schema.cassproject.org/0.3/Assertion";
    static TYPE_0_6 = "https://schema.cassproject.org/0.4/Assertion";
    static myType = Assertion.TYPE_0_6;
    static codebooks = null;
    /**
     *  URL of the competency.
     * 
     *  @property competency
     *  @type string(URL)
     */
    competency = null;
    /**
     *  URL of the framework within which the assertion is restricted.
     * 
     *  @property framework
     *  @type string(URL)
     */
    framework = null;
    /**
     *  URL of the level, or null if 'held with no performance expectations'.
     * 
     *  @property level
     *  @type string
     */
    level = null;
    /**
     *  Confidence with which the assertion was made.
     *  Confidence has many interpretations, one possibility is the probability that the individual could demonstrate the competency again.
     * 
     *  @property confidence
     *  @type float [0,1]
     */
    confidence = null;
    /**
     *  Public Key in PEM format of the recipient of the assertion.
     * 
     *  @property subject
     *  @type EcEncryptedValue<Public Key PEM>
     */
    subject = null;
    /**
     *  Public Key in PEM format of the identity making the assertion.
     * 
     *  @property agent
     *  @type EcEncryptedValue<Public Key PEM>
     */
    agent = null;
    /**
     *  Encrypted evidence. May be a string, URL or schema.org/Thing.
     * 
     *  @property evidence
     *  @type EcEncryptedValue<string | URL | Thing>[]
     */
    evidence = null;
    /**
     *  Time that the assertion was made in milliseconds since the Unix Epoch.
     * 
     *  @property assertionDate
     *  @type EcEncryptedValue<long>
     */
    assertionDate = null;
    /**
     *  Time that the assertion expires, specified in milliseconds since the Unix Epoch.
     * 
     *  @property expirationDate
     *  @type EcEncryptedValue<long>
     */
    expirationDate = null;
    /**
     *  Describes the slope of the line from the initial confidence at the assertion date and the expiration date. t is a number between [0,1] representing the percentage of time that has elapsed. Examples include t^2 and ln(t).
     * 
     *  @property decayFunction
     *  @type EcEncryptedValue<string>
     */
    decayFunction = null;
    /**
     *  True if the assertion is a claim that the subject cannot demonstrate the competency.
     * 
     *  @property negative
     *  @type EcEncryptedValue<boolean>
     */
    negative = null;
    getSubject() {
        return EcPk.fromPem(this.subject);
    };
    /**
     *  Sets the subject of an assertion. Makes a few assumptions: Owners of the
     *  object should be able to see and change the encrypted value. Owners and
     *  readers of the object should be persisted.
     * 
     *  @param pk
     */
    setSubject(pk) {
        var owners = new Array();
        var readers = this.reader;
        if (readers == null) 
            readers = new Array();
        if (this.subject != null) {
            if (this.subject.owner != null) 
                owners.concat(this.subject.owner);
            if (this.subject.reader != null) 
                readers.concat(this.subject.reader);
        }
        if (this.owner != null) 
            owners = owners.concat(this.owner);
        readers.push(pk.toPem());
        this.subject = pk.toPem();
    };
    getSubjectAsync(success, failure) {
        success(EcPk.fromPem(this.subject));
    };
    getAgent() {
        return EcPk.fromPem(this.agent);
    };
    setAgent(pk) {
        this.agent = pk.toPem();
    };
    getAgentAsync(success, failure) {
        success(EcPk.fromPem(this.agent));
    };
    getSubjectName() {
        if (this.subject == null) 
            return "Nobody";
        var subjectPk = this.getSubject();
        var identity = EcIdentityManager.getIdentity(subjectPk);
        if (identity != null && identity.displayName != null) 
            return identity.displayName + " (You)";
        var contact = EcIdentityManager.getContact(subjectPk);
        if (contact == null || contact.displayName == null) 
            return "Unknown Subject";
        return contact.displayName;
    };
    getSubjectNameAsync(success, failure) {
        if (this.subject == null) {
            success("Nobody");
            return;
        }
        this.getSubjectAsync(function(subjectPk) {
            var identity = EcIdentityManager.getIdentity(subjectPk);
            if (identity != null && identity.displayName != null) {
                success(identity.displayName + " (You)");
                return;
            }
            var contact = EcIdentityManager.getContact(subjectPk);
            if (contact == null || contact.displayName == null) {
                success("Unknown Subject");
                return;
            }
            success(contact.displayName);
        }, failure);
    };
    getAgentName() {
        if (this.agent == null) 
            return "Nobody";
        var agentPk = this.getAgent();
        var identity = EcIdentityManager.getIdentity(agentPk);
        if (identity != null && identity.displayName != null) 
            return identity.displayName + " (You)";
        var contact = EcIdentityManager.getContact(agentPk);
        if (contact == null || contact.displayName == null) 
            return "Unknown Agent";
        return contact.displayName;
    };
    getAgentNameAsync(success, failure) {
        if (this.subject == null) {
            success("Nobody");
            return;
        }
        this.getAgentAsync(function(subjectPk) {
            var identity = EcIdentityManager.getIdentity(subjectPk);
            if (identity != null && identity.displayName != null) {
                success(identity.displayName + " (You)");
                return;
            }
            var contact = EcIdentityManager.getContact(subjectPk);
            if (contact == null || contact.displayName == null) {
                success("Unknown Agent");
                return;
            }
            success(contact.displayName);
        }, failure);
    };
    getAssertionDate() {
        return this.assertionDate;
    };
    setAssertionDate(assertionDateMs) {
        this.assertionDate = assertionDateMs;
    };
    getAssertionDateAsync(success, failure) {
        success(this.assertionDate);
    };
    getExpirationDate() {
        return this.expirationDate;
    };
    setExpirationDate(expirationDateMs) {
        this.expirationDate = expirationDateMs;
    };
    getExpirationDateAsync(success, failure) {
        success(this.expirationDate);
    };
    getEvidenceCount() {
        if (this.evidence == null) 
            return 0;
        return this.evidence.length;
    };
    getEvidence(index) {
        return this.evidence[index];
    };
    getEvidenceAsync(index, success, failure) {
        success(this.evidence[index]);
    };
    getDecayFunction() {
        return this.decayFunction;
    };
    setDecayFunction(decayFunctionText) {
        this.decayFunction = decayFunctionText;
    };
    getDecayFunctionAsync(success, failure) {
        success(this.decayFunction);
    };
    getNegative() {
        return "true".equals(this.negative);
    };
    setNegative(negativeB) {
        this.negative = negativeB;
    };
    getNegativeAsync(success, failure) {
        success("true".equals(this.negative));
    };
    setCompetency(competencyUrl) {
        this.competency = competencyUrl;
    };
    setLevel(levelUrl) {
        this.level = levelUrl;
    };
    setConfidence(confidenceZeroToOne) {
        this.confidence = confidenceZeroToOne;
    };
    setEvidence(evidences) {
        this.evidence = evidences;
    };
    upgrade() {
        EcRemoteLinkedData.upgrade.call(this);
        if (Assertion.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Cass.context_0_2, Assertion.TYPE_0_2);
        }
        if (Assertion.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_3, Assertion.TYPE_0_3);
        }
        if (Assertion.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_4, Assertion.TYPE_0_4);
        }
        if (Assertion.TYPE_0_4.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_5, Assertion.TYPE_0_5);
        }
        if (Assertion.TYPE_0_5.equals(this.getFullType())) {
            this.setContextAndType(Cass.context_0_6, Assertion.TYPE_0_6);
        }
        this.agent = EcEncryptedValue.revive(this.agent);
        this.subject = EcEncryptedValue.revive(this.subject);
        this.assertionDate = EcEncryptedValue.revive(this.assertionDate);
        this.expirationDate = EcEncryptedValue.revive(this.expirationDate);
        this.decayFunction = EcEncryptedValue.revive(this.decayFunction);
        this.negative = EcEncryptedValue.revive(this.negative);
        if (this.evidence != null) 
            for (var i = 0; i < this.evidence.length; i++) {
                this.evidence[i] = EcEncryptedValue.revive(this.evidence[i]);
            }
    };
    getTypes() {
        var a = new Array();
        a.push(Assertion.TYPE_0_6);
        a.push(Assertion.TYPE_0_5);
        a.push(Assertion.TYPE_0_4);
        a.push(Assertion.TYPE_0_3);
        a.push(Assertion.TYPE_0_2);
        a.push(Assertion.TYPE_0_1);
        return a;
    };
    static getCodebook(assertion) {
        if (Assertion.codebooks == null) 
            Assertion.codebooks = new Object();
        return (Assertion.codebooks)[assertion.id];
    };
}, {codebooks: "Object", subject: "EcEncryptedValue", agent: "EcEncryptedValue", evidence: {name: "Array", arguments: ["EcEncryptedValue"]}, assertionDate: "EcEncryptedValue", expirationDate: "EcEncryptedValue", decayFunction: "EcEncryptedValue", negative: "EcEncryptedValue", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
