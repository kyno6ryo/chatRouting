var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = require('../models/Contacto.js');

/* SAVE BOOK */
router.post('/', function(req, res, next) {
    Blog.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});