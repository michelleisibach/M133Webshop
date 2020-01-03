const express = require('express');
const path = require('path');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/index.html'));
});


app.listen(8080, () => {
    console.log("Server listening on Port 8080")
});