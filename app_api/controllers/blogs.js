var mongoose = require('mongoose');
var blogs = mongoose.model('blogs');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

module.exports.blogsList = function (req, res) {};

module.exports.blogsCreate = function (req, res) {};

module.exports.blogsReadOne = function (req, res) {};

module.exports.blogsUpdateOne = function (req, res) {};

module.exports.blogsDelete = function (req, res) {};