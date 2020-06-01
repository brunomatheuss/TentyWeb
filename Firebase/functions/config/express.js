var express = require('express'),
    load = require('express-load'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session');

module.exports = function() {
    var app = express();
    app.set('trust proxy', 1);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./app/public'));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //middleware - BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    load('routes', { cwd: 'app' }).into(app);


    return app;
}