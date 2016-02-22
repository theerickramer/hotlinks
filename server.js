var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = app.listen(8000, function(){
	console.log('Server listening on localhost:8000');
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Hotlink = mongoose.model('Hotlink', { hotlink: String })

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/hotlinks', function(req, res) {
	var hotlink = new Hotlink({ hotlink: req.body.hotlink});
	hotlink.save(function(err, hotlink) {
		if (err) {
			console.error(err);
			res.json('Error: ' + req.body.hotlink + ' could not be saved');
		} else {
			console.log(hotlink + ' saved')
			res.json(req.body.hotlink + ' saved');
		}
	})
});

app.get('/hotlinks', function(req, res) {
	var hotlinks = Hotlink.find({}, function(err, hotlinks) {
		if (err) {
			console.error(err);
			res.json('Error: Hotlinks could not be loaded');
		} else {
			res.json(JSON.stringify(hotlinks));
		}
	})
});