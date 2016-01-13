/**
 * Created by Rye on 1/12/2016.
 */
var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]

});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }}

var User = mongoose.model('User', userSchema)

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        console.log(collection)
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt()
            hash = encrypt.hashPwd(salt, 'rye')
            User.create({
                firstName: 'Rye',
                lastName: 'Gongora',
                username: 'rye',
                salt: salt,
                hashed_pwd: hash,
                roles: ['admin']
            });
            salt = encrypt.createSalt()
            hash = encrypt.hashPwd(salt, 'joe')
            User.create({
                firstName: 'Joe',
                lastName: 'Shmoe',
                username: 'joe',
                salt: salt,
                hashed_pwd: hash,
                roles: []
            });
            salt = encrypt.createSalt()
            hash = encrypt.hashPwd(salt, 'jill')
            User.create({firstName: 'Jill', lastName: 'Jail', username: 'jill', salt: salt, hashed_pwd: hash});
        }
    })
}
exports.createDefaultUsers = createDefaultUsers;