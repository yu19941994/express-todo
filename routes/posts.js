const express = require('express');
const router = express.Router();

const PostsControllers = require('../controllers/posts');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res, next) {
    PostsControllers.getPosts({ req, res });
});

router.post('/posts', function(req, res, next) {
    PostsControllers.createPost({ body, req, res });
});

router.patch('/posts/:post', function(req, res, next) {
    const id = req.params.post;
    PostsControllers.modifyPost({ req, res, id })
});

router.delete('/posts', function(req, res, next) {
    PostsControllers.deletePosts({ req, res });
});

router.delete('/posts', function(req, res, next) {
    const id = req.params.post;
    PostsControllers.deletePosts({ req, res, id });
});

router.options('/posts', function(req, res, next) {
    HttpControllers.cors(res);
});

router.options('*', function(req, res, next) {
    HttpControllers.notFound(res);
});

module.exports = router;
