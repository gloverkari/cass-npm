/**
 *  Component of EbacEncryptedValue that contains data needed to decrypt
 *  encrypted payload. Is, itself, encrypted.
 *  <p>
 *  Also contains data used to verify that encrypted-data substitution attacks
 *  were not performed on the data.
 *  <p>
 *  Must be encryptable by RSA-2048, therefore, serialized form must less than 256
 *  bytes.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EbacEncryptedSecret
 *  @module org.cassproject
 */
var EbacEncryptedSecret = function() {
    EcLinkedData.call(this, Ebac.context, EbacEncryptedSecret.TYPE_0_4);
};
EbacEncryptedSecret = stjs.extend(EbacEncryptedSecret, EcLinkedData, [], function(constructor, prototype) {
    constructor.TYPE_0_1 = "http://schema.eduworks.com/ebac/0.1/encryptedSecret";
    constructor.TYPE_0_2 = "http://schema.eduworks.com/ebac/0.2/encryptedSecret";
    constructor.TYPE_0_3 = "http://schema.cassproject.org/kbac/0.2/EncryptedSecret";
    constructor.TYPE_0_4 = "https://schema.cassproject.org/kbac/0.4/EncryptedSecret";
    /**
     *  IV used to encrypt/decrypt payload. Base64 encoded.
     * 
     *  @property iv
     *  @type string
     */
    prototype.iv = null;
    /**
     *  Hashed and Base64 encoded ID of the parent (if any) object.
     *  Used to verify the data has not been copied from elsewhere.
     * 
     *  @property id
     *  @type string
     */
    prototype.id = null;
    /**
     *  Secret used to encrypt/decrypt payload.
     * 
     *  @property secret
     *  @type string
     */
    prototype.secret = null;
    /**
     *  Dot and Bracket notated index of the field in the parent-most object (if
     *  any). Used to verify the field has not been copied from elsewhere.
     * 
     *  @property field
     *  @type string
     */
    prototype.field = null;
    /**
     *  Deserializes the field from a compact form used in RSA encryption.
     * 
     *  @param {JSONObject} obj Object to deserialize from.
     *  @return {EbacEncryptedSecret} Secret in object form.
     *  @method fromEncryptableJson
     *  @static
     */
    constructor.fromEncryptableJson = function(obj) {
        var secret = new EbacEncryptedSecret();
        var o = (obj);
        secret.iv = o["v"];
        if (o["d"] != null) 
            secret.id = o["d"];
        secret.secret = o["s"];
        if (o["f"] != null) 
            secret.field = o["f"];
        return secret;
    };
    /**
     *  Serializes the field into a compact form for RSA encryption.
     * 
     *  @return {string} string
     *  @method toEncryptableJson
     */
    prototype.toEncryptableJson = function() {
        var o = (new Object());
        o["v"] = this.iv;
        if (this.id != null) 
            o["d"] = this.id;
        o["s"] = this.secret;
        if (this.field != null) 
            o["f"] = this.field;
        return JSON.stringify(o);
    };
    prototype.upgrade = function() {
        EcLinkedData.prototype.upgrade.call(this);
        if (EbacEncryptedSecret.TYPE_0_1.equals(this.type)) {
            var me = (this);
            if (me["@context"] == null && me["@schema"] != null) 
                me["@context"] = me["@schema"];
            this.setContextAndType(Ebac.context_0_2, EbacEncryptedSecret.TYPE_0_2);
        }
        if (EbacEncryptedSecret.TYPE_0_2.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_3, EbacEncryptedSecret.TYPE_0_3);
        }
        if (EbacEncryptedSecret.TYPE_0_3.equals(this.getFullType())) {
            this.setContextAndType(Ebac.context_0_4, EbacEncryptedSecret.TYPE_0_4);
        }
    };
    prototype.getTypes = function() {
        var a = new Array();
        a.push(EbacEncryptedSecret.TYPE_0_4);
        a.push(EbacEncryptedSecret.TYPE_0_3);
        a.push(EbacEncryptedSecret.TYPE_0_2);
        a.push(EbacEncryptedSecret.TYPE_0_1);
        return a;
    };
}, {atProperties: {name: "Array", arguments: [null]}}, {});