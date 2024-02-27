var mongoose = require('mongoose');
var Blogs = mongoose.model('blog');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

//GET a list of all blogs
module.exports.blogsList = function (req, res) {
    console.log('Getting Blog list');
    Loc
        .find()
        .exec(function(err, results) {
          if (!results) {
            sendJSONresponse(res, 404, {
              "message": "no blogs found"
            });
            return;
          } else if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log(results);
          sendJSONresponse(res, 200, buildBlogList(req, res, results));
        }); 
  };
  
  var buildBlogList = function(req, res, results) {
    var blogs = [];
    results.forEach(function(obj) {
      blogs.push({
        title: obj.title,
        text: obj.text,
        _id: obj._id
      });
    });
    return blogs;
};

module.exports.blogsCreate = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};

//Get a blog by ID
module.exports.blogsReadOne = function (req, res) {

module.exports.blogsReadOneReadOne = function(req, res) {
    console.log('Finding location details', req.params);
    if (req.params && req.params.blogid) {
      Blogs
        .findById(req.params.blogid)
        .exec(function(err, blog) {
          if (!blog) {
            sendJSONresponse(res, 404, {
              "message": "blogid not found"
            });
            return;
          } else if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log(blog);
          sendJSONresponse(res, 200, blog);
        });
    } else {
      console.log('No blogid specified');
      sendJSONresponse(res, 404, {
        "message": "No blogid in request"
      });
    }
  };
};

module.exports.blogsUpdateOne = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};

module.exports.blogsDeleteOne = function (req, res) {
    sendJSONresponse(res,200,{"status": "success"});
};