var express = require('express');
var path = require('path');
var fs = require('fs');
var crypto = require('crypto');
var router = express.Router();
var settings = require('../setting');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;



exports.main = function(req, res){

  if(!req.session || !req.user){
    res.render('index');
  }else{
    res.redirect('/document');
  }
}