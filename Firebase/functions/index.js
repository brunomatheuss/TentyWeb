const functions = require('firebase-functions');
var app = require('./config/express')();
exports.sample = functions.https.onRequest(app);