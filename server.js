const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.get("/",function(req, res) {
  res.send(__dirname+"/index html"):
});
app.post("/",function(req, res) {
 var n1 = Number(req,body.num1);
 var n2 = Number(req.body.num2);
 var result = n1+n2;
 res.send("The answer is" + result);
});
app.post("/", function(req, res) {
  res.send("Thank for posting the form");
app.listen(3000, function() {
  console.log("Server has started on port 3000");
});


