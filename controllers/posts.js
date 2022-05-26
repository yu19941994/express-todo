const Post = require('../model/post');
const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');

// 因 body chunk 部分已做處理
const posts = {
    async getPosts(req, res) {
        const posts = await Post.find();
        handleSuccess(res, posts);
    },
    async createPost(req, res) {
        try {
            const { body } = req;
            const newPost = await Post.create(
                {
                    content: body.content,
                    image: body.image,
                    name: body.name,
                    likes: body.likes
                }
            )
            handleSuccess(res, 'success', newPost);
        } catch (error) {
            handleError(res, error);
        }
    },
    async modifyPosts(req, res, id) {
        try {
            const content = req.body.content;
            if (content !== undefined) {
                await Post.findByIdAndUpdate(id, { content })
                const posts = await Post.find();
                handleSuccess(res, posts);
            } else {
                handleError(res);
            }
        } catch (error) {
            handleError(res, error);
        }
    },
    async deletePosts(req, res) {
        await Post.deleteMany({});
        handleSuccess(res, []);
    },
    async deletePost(req, res, id) {
        await Post.findByIdAndDelete(id);
        handleSuccess(res, null);
    }
}

module.exports = posts;
