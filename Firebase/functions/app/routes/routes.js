const url = require('url');
var admin = require("firebase-admin");
const ref = admin.initializeApp({
    databaseURL: "https://larissa-aragao.firebaseio.com",
    storageBucket: "larissa-aragao.appspot.com",
});

module.exports = function(app) {

    app.get("/teste", function(req, res) {
        res.render("cadastro/index");
    });

}