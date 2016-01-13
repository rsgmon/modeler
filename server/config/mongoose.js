/**
 * Created by Rye on 1/12/2016.
 */
var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('modeler db opened' + config.db);
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        salt: String,
        hashed_pwd: String
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch) {
            return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }}

    var User = mongoose.model('User', userSchema)

    User.find({}).exec(function(err, collection) {
        console.log(collection)
        if(collection.length === 0) {
            var salt, hash;
            salt = createSalt()
            hash = hashPwd(salt, 'rye')
            User.create({firstName: 'Rye', lastName:'Gongora', username: 'rye', salt: salt, hashed_pwd:hash });
            salt = createSalt()
            hash = hashPwd(salt, 'joe')
            User.create({firstName: 'Joe', lastName:'Shmoe', username: 'joe', salt: salt, hashed_pwd:hash});
            salt = createSalt()
            hash = hashPwd(salt, 'jill')
            User.create({firstName: 'Jill', lastName:'Jail', username: 'jill', salt: salt, hashed_pwd:hash});
        }
    })
}

function createSalt () {
    return crypto.randomBytes(128).toString('base64'); }

function hashPwd (salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex'); }
