/**
 * Created by Rye on 1/12/2016.
 */
var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    portfolioModel = require('../models/portfolio.js');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('modeler db opened' + config.db);
    });

    userModel.createDefaultUsers();
    portfolioModel.createDefaultPortfolios();


}