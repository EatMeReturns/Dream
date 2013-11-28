var express = require('express.io');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.render('index');
});

var User = require('./models/user');
var u = new User().findById(1);
console.log(u.username + ' has ' + u.decks.length + ' decks.');

app.listen(6060);