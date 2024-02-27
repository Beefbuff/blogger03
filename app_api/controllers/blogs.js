var mongoose = require('mongoose');
var blogs = mongoose.model('blogs');

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

module.exports.blogsDelete = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};