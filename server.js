var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = app.listen(process.env.PORT || 8000, function(){
	console.log('Server listening on localhost:8000');
});

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // replace default deprecated mpromise
mongoose.connect(
  process.env.NODE_ENV === 'production'
    ? process.env.MONGOLAB_URI
    : process.env.HOTLINKS_DEV
    // : process.env.HOTLINKS_PROD
);
var Hotlink = mongoose.model('Hotlink', { hotlink: String })

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Methods', 'DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index.html');
})

app.get('/hotlinks', function(req, res) {
	var hotlinks = Hotlink.find({}, function(err, hotlinks) {
		if (err) {
			console.error(err);
			res.json('Error: Hotlinks could not be loaded');
		} else {
			res.json(hotlinks.reverse());
		}
	})
});

app.post('/hotlinks', function(req, res) {
	var hotlink = new Hotlink({ hotlink: req.body.hotlink });
	hotlink.save()
		.then(function(){
			console.log(hotlink + ' saved')
			res.json(req.body.hotlink + ' saved');
		})
		.catch(function(error) { 
			console.error(error)
		})
});

app.delete('/hotlinks', function(req, res) {
	Hotlink.findByIdAndRemove(req.body.id)
		.then(function(query){
			console.log(query + ' deleted')
			res.json(query + ' deleted');
		})
		.catch(function(error) { 
			console.error(error)
		})
});
