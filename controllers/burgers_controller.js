var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var quote = require("../models/burger.js");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
    quote.all(function(data) {
    res.json({ burgers: data });
  });
});


router.post("/burgers/create", function(req,res){
	burgers.insertOne([
		"burger_name"
		],[
			req.body.burger_name
			], function(data){
				res.redirect("/burgers");
			});
});

// router.put("/burgers/update/:id", function(req,res){
// 	var condition = "id = " + req.params.id;
// 	console.log("condition", condition);

// 	burgers.updateOne({
// 		"devoured": req.body.devoured
// 	}, condition, function(data){
// 		res.redirect("/burgers")
// 	});
// });

module.exports = router;