var express = require('express');
var app = express();

// Port.
app.set('port', (process.env.PORT || 3000));

// Views.
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Static files.
app.use(express.static(__dirname + '/public'));

// Routes.
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/projects', function(req, res) {
	res.render('projects');
});

app.get('/secret', function(req, res) {
  res.send('You found it!');
});

// Start app.
app.listen(app.get('port'), function() {
  console.log("Running on:" + app.get('port'));
});
