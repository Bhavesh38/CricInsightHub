import express from "express";
import authenticate from "../middleware/auth.js";
import ChatMessages from "../models/chatMessageModal.js";
// import { io } from "../index.js";

const router=express.Router();

// get all chat messages of an user 
// ChatMessages
router.get("/message/:userId", authenticate,async (req, res) => {
    try {
        //find all messages which is associated to current user and the usergiven in params
        const messages = await ChatMessages.find({
            $or: [
                { sender: req.user._id, receiver: req.params.userId },
                { sender: req.params.userId, receiver: req.user._id },
            ],
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;
