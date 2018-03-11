var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});