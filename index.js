'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./controller/user');
var app = express();


var dbName = "shajMarag";
var connectionString = 'mongodb://localhost:27017/'+dbName;
mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',users);

app.set('port',process.env.PORT || 8000);
var server = app.listen(app.get('port'),function(){
  console.log('Express server listening on port' + server.address().port);
});
