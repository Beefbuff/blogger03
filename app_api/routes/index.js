var express = require('express');
var router = express.Router();
var ctrlBlogList = require('../controllers/blogs');
var ctrlHome = require('../controllers/home');

router.get('/', ctrlHome.home);
router.get('/list', ctrlBlogList.list);
router.post('/add',ctrlBlogList.add);
router.put('/edit',ctrlBlogList.edit);
router.delete('/delete',ctrlBlogList.delete);