'use strict';
const config = require('../config');
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')(config.dbURI);

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var posts = db.get('posts');
    posts.find({}, {}, function(err, posts) {
        res.render('index3', { posts: posts });
    });
});


module.exports = router;
