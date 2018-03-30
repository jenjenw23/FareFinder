var express = require("express");
var router = express.Router();
var keys = require("../keys.js")
//var sourceFile = require('../public/assets/js/autocomplete.js');

// Import the model (users.js) to use its database functions
var db = require("../models/");

var Uber = require('node-uber');

var uber = new Uber({
  client_id: 'hFgXIZU8GWKLZXZ2N0DvzHS9Y3R6Ssb0',
  client_secret: 'wVhvFEpIq-VqJwY8Qb6z5gZutjJ8E1E2_AU-tmuZ',
  server_token: 'W7bo0EFEbEw-eDW8RK0C_ADwWDoy7qm9RTxW7CmE',
  redirect_uri: 'http://localhost',
  name: 'Test'
});

//var googleApi;

//index -- homepage
router.get('/', function (req, res) {
    //googleApi = keys.google.api_key;
    //console.log(googleApi);
    res.render('index');
});

//admin page
router.get('/admin', function (req, res) {
    //res.render('admin');
    db.User.findAll({}).then(function (data) {
        res.render("admin", { users: data });
    })
});

//login page
router.get('/login', function (req, res) {
    res.render('login');
});

//registration page
router.get('/reg', function (req, res) {
    res.render('reg');
});

router.get('/estimates', function (req, res) {
    //console.log(sourceFile.startLat);
    //console.log(ffCoords);
    res.render('estimates');

});

//need to add functions to assets/js/users.js
router.get("/admin/users/:id", function (req, res) {
    db.User.findOne({
        where: {
            id: req.params.id
        },
    }).then(function (dbUser) {
        res.json(dbUser);
    });
});

module.exports = router;

// Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//   db.User.findAll({}).then(function (data) {
//     res.render("index", { users: data });
//   })
// });


// Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//   db.User.findAll({}).then(function (data) {
//     res.render("index", { users: data });
//   })
// });

// router.post("/api/burgers", function (req, res) {
//   db.Burger.create({
//     burger_name: req.body.name
//   }).then(function () {
//     res.redirect("/");
//   });
// });

// router.put("/api/burgers/:id", function (req, res) {
//   //var condition = "id = " + req.params.id;
//   db.Burger.update({
//     devoured: true
//   }, {
//       where: {
//         id: req.params.id
//       }
//     }).then(function () {
//       //needs 200 to reload page when successful
//       res.redirect(200, "/");
//     });
// });

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.

