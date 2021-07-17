var express = require('Express');
var request = require('request');
var app = express();
const url = "https://omdbapi.com/?apikey=eb2ba88f&s=";
app.set("view engine", "ejs");
app.get("/", function (req, res){
    res.render("search");
});
app.get("/results", function (req, res){
    var Moviename  = req.query.Moviename;
    console.log(Moviename);
    request(url + Moviename, function(error, response, body){
        if(!error && response.statusCode==200) {
            var parsedData = JSON.parse(body);

            res.render("results",{data: parsedData});
        }
        else {
            console.log("Bogus, not working!");
        }

    });
});

app.listen(3000);