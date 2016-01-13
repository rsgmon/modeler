/**
 * Created by Rye on 1/12/2016.
 */


passport = require('passport');

exports.authenticate = function (req, res, next) {
    req.body.username = req.body.username.toLowerCase();
    var auth = passport.authenticate('local', function (err, user) {
        if (err) {
            return next(err);}
        if (!user) { res.send({success: false})}
        req.logIn(user, function (err) {
            if (err) {return next(err);
            }
            res.send({success: true, user: user})
        })
    })
    auth(req, res, next);
}