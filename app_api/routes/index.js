var express = require('express');
var router = express.Router();
var ctrlBlogList = require('../controllers/blogs');

//var ctrlHome = require('../controllers/home');
//router.get('/', ctrlHome.home);

router.get('/blogs', ctrlBlogList.blogsList);
router.post('/blogs',ctrlBlogList.blogsCreate);
router.get('/edit/:blogid',ctrlBlogList.blogsReadOne);
router.put('/edit/:blogid',ctrlBlogList.blogsUpdateOne);
router.delete('/delete/:blogid',ctrlBlogList.blogsDeleteOne);

module.exports = router;