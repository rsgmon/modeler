/**
 * Created by Rye on 1/12/2016.
 */
var auth = require('./auth.js');

module.exports = function(app) {
    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    })

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    app.get('*', function(req, res){
        res.render('index');
    })

}