import express from "express";
import authenticate from "../middleware/auth.js";
import Posts from "../models/postModel.js";
import postComments from "../models/postCommentsModel.js";

const router = express.Router();


router.post("/create", authenticate, async (req, res) => {
    try {
        const { textContent, images } = req.body;

        // Create new post instance
        const newPost = new Posts({
            title: textContent,
            images,
            createdBy: req.user._id
        });

        // Save post to MongoDB
        await newPost.save();
        res.status(201).json({ message: 'Post saved successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

router.get("/getallposts", authenticate, async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

/// like/dislike the post with postId
router.get("/like/:id", authenticate, async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Posts.findOne({
            _id: postId,
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        // Check if the user has already liked the post
        const isLiked = post.likes.includes(req.user._id);
        if (isLiked) {
            post.likes = post.likes.filter(id => id.toString() !== req.user._id.toString());
        } else {
            post.likes.push(req.user._id);
        }
        await post.save();
        res.status(200).json({ message: "SUCCESS" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

});

/// comment on the post with postId and save it to the postComments collection
router.post("/comment/:id", authenticate, async (req, res) => {
    const postId = req.params.id;
    const { comment } = req.body;
    try {
        const post = await Posts.findOne({
            _id: postId,
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        // Create new post comment instance
        const newComment = new postComments({
            commentContent: comment,
            postId: postId,
            commentedBy: req.user._id
        });
        await newComment.save();
        post.comments.push(newComment._id);
        await post.save();
        res.status(200).json({ message: "SUCCESS" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete the comments of the post with postId and commentId
router.delete("/deletecomment/:postId/:commentId", authenticate, async (req, res) => {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    try {
        const post = await Posts.findOne({
            _id: postId,
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        const comment = await postComments.findOne({
            _id: commentId,
        });
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        if (comment.commentedBy.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        await comment.delete();
        post.comments = post.comments.filter(id => id.toString() !== commentId.toString());
        await post.save();
        res.status(200).json({ message: "SUCCESS" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//get all comments of the post with postId
router.get("/getcomments/:id", authenticate, async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Posts.findOne({
            _id: postId,
        });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        const comments = await postComments.find({
            postId: postId,
        });
        res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default router;