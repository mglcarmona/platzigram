var express = require('express');
var app     = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', {
    index: 69
  });
});

app.listen(3000, function(err) {
  if (err) console.log(err), process.exit(1);
  console.log('App listening at localhost:3000');
});
