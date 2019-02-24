var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Items = require('./api/models/apiModel'), //created model loading here
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/boilerplateDb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

app.listen(port);
console.log('RESTful API server started on: ' + port);
