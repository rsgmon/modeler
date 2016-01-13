var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var app =express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}


app.set('views', __dirname  + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile:compile
    }
));
app.use(express.static(__dirname + '/public'));

if (env=== 'development') {
    mongoose.connect('mongodb://localhost/test')
} else {
    mongoose.connect('mongodb://jdoe:weights@ds043615.mongolab.com:43615/optimizer')}


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('modeler db opened');
});

app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
})

app.get('*', function(req, res){
    res.render('index');
})

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on' + port + '...');