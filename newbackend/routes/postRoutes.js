import express from "express";
import authenticate from "../middleware/auth.js";
import Posts from "../models/postModel.js";

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
export default router;