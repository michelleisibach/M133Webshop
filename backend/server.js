var express = require('express');
var path = require('path');
var app = express();
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/../frontend/html/index.html'));
});
app.listen(8080, function () {
    console.log("Server listening on Port 8080");
});
