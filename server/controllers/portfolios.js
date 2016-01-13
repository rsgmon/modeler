/**
 * Created by Rye on 1/13/2016.
 */
var Portfolio = require('mongoose').model('Portfolio');

exports.getPortfolios = function (req, res) {
    Portfolio.find({}).exec(function(err, collection) {
        res.send(collection);
    });
}

exports.updatePortfolio = function (req, res) {
    var upPortfolio = req.body;
    console.log(upPortfolio['positions'][0]["symbol"]);
    for (var e in upPortfolio['positions']) {
        upPortfolio['positions'][e]['targetWeight'] = upPortfolio['positions'][e]['targetWeight'] +
            upPortfolio['positions'][e]['change'];
        upPortfolio['positions'][e]['change'] = 0;
    }

    Portfolio.update(upPortfolio, function (err) {
        if (err) { res.status(400); return res.send({ reason: err.toString() }) }
    });
    res.end();

}