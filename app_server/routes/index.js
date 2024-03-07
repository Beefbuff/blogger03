var express = require('express');
var router = express.Router();
var ctrlBlogList = require('../controllers/blogs');
var ctrlHome = require('../controllers/home');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Kyle Kalbach\'s Blog Site' });
});

router.get('/', ctrlHome.home);
router.get('/list', ctrlBlogList.list);

router.get('/add',ctrlBlogList.add);
router.post('/add',ctrlBlogList.addPost);

router.get('/edit/:blogId',ctrlBlogList.edit);
router.post('/edit/:blogId',ctrlBlogList.editPost);

router.get('/delete/:blogId',ctrlBlogList.delete);
router.post('/delete/:blogId',ctrlBlogList.deletePost);



module.exports = router;
