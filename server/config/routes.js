/**
 * Created by Rye on 1/12/2016.
 */
var auth = require('./auth.js'),
    users = require('../controllers/users')
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    portfolios = require('../controllers/portfolios');

module.exports = function(app) {
    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);

    app.get('/api/portfolios', portfolios.getPortfolios);
    app.put('/api/portfolios', portfolios.updatePortfolio)

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    })

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    app.get('*', function(req, res){
        res.render('index', {bootstrappedUser: req.user});
    })

}