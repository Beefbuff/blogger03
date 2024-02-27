var mongoose = require('mongoose');
var Blogs = mongoose.model('blog');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
  };

//GET a list of all blogs
module.exports.blogsList = function (req, res) {
    console.log('Getting Blog list');
    Blogs
        .find()
        .exec=(function(err, results) {
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

// POST a new blog
module.exports.blogsCreate = function (req, res) {
    console.log(req.body);
    Blogs
     .create({
        title: req.body.title,
        text: req.body.text,
       }, function(err, blog) {
         if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
         } else {
            console.log(location);
            sendJSONresponse(res, 201, blog);
         }
       }
     );
};

//Get a blog by ID
module.exports.blogsReadOne = function (req, res) {

module.exports.blogsReadOneReadOne = function(req, res) {
    console.log('Finding Blog', req.params);
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

//PUT update a blog by id
module.exports.blogsUpdateOne = function (req, res) {
    console.log("Updating a blog entry with id of " + req.params.id);
    console.log(req.body);
    Blogs
  	  .findOneAndUpdate(
	     { _id: req.params.id },
 	     { $set: {"title": req.body.title, "text": req.body.text}},
	     function(err, response) {
	         if (err) {
	  	         sendJSONresponse(res, 400, err);
	         } else {
		        sendJSONresponse(res, 201, response);
	        }
	    }
    );
};

//DELETE a blog by id
module.exports.blogsDeleteOne = function (req, res) {
    console.log("Deleting blog entry with id of " + req.params.id);
    console.log(req.body);
    Blogs
        .findByIdAndRemove(req.params.id)
        .exec (
            function(err, response) {
                if (err) {
                            sendJSONresponse(res, 404, err);
                } else {
                            sendJSONresponse(res, 204, null);
                }
            }
        );
};