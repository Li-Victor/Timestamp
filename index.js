var express = require('express');
var bodyParser = require('body-parser');
var dateController = require('./date/dateController/dateController');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middleware for static pages
app.use('/', express.static(__dirname + '/public'));

//send index.html
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/now', dateController.getNow);
app.get('/:date', dateController.getDate);


//all other Requests
app.get('*', function (req, res, next) {
    next();
});

app.post('*', function (req, res, next) {
    next();
});

app.put('*', function (req, res, next) {
    next();
});

app.delete('*', function (req, res, next) {
    next();
});

//error middleware
app.use(function (err, req, res, next) {
    res.status(404).send({
        unix: null,
        natural: null
    });
});

var port = 3000;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});
