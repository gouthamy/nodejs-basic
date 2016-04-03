'use strict';
var User = require('../models/userModel');
var express = require('express');
var router = express.Router();

router.route('/users').get(function(req,res){
  User.find(function(err,users){
    if(err)
       return res.send(err);
    res.json(users);
  });
});

router.route('/users').post(function(req,res){
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      return res.send(err);
    }
    res.send({message:'User added'});
  });
});

module.exports = router;
