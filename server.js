var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = app.listen(process.env.PORT || 8000, function(){
	console.log('Server listening on localhost:8000');
});

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);
var Hotlink = mongoose.model('Hotlink', { hotlink: String })

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.render('index.html');
})

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