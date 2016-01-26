/**
 * Created by Rye on 1/12/2016.
 */
var path = require("path");
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://127.0.0.1/FirstMean',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://jdoe:weights@ds043615.mongolab.com:43615/optimizer',
        port: process.env.PORT || 80
    },
}