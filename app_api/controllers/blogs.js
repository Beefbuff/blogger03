var mongoose = require('mongoose');
var Blogs = mongoose.model('blog');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

module.exports.blogsList = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};

module.exports.blogsCreate = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};

module.exports.blogsReadOne = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};

module.exports.blogsUpdateOne = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};

module.exports.blogsDeleteOne = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};