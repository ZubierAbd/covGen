const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/dist/covGen'));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/covGen/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);