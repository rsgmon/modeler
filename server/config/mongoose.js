/**
 * Created by Rye on 1/12/2016.
 */
var mongoose = require('mongoose');

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
        username: String
    });

    var User = mongoose.model('User', userSchema)

    User.find({}).exec(function(err, collection) {
        console.log(collection)
        if(collection.length === 0) {
            User.create({firstName: 'Rye', lastName:'Gongora', username: 'rye'});
            User.create({firstName: 'Joe', lastName:'Shmoe', username: 'joe'});
            User.create({firstName: 'Jill', lastName:'Jail', username: 'jill'});
        }
    })
}