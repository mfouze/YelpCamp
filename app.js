var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.send("landing");

});
//ceci est un commentaire

app.listen(8085, function(){
    console.log("server has started");
});