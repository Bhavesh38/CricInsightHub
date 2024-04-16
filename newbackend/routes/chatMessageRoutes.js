import express from "express";
import authenticate from "../middleware/auth";
import ChatMessages from "../models/chatMessageModal";

const router=express.Router();

// get all chat messages of an user 
// ChatMessages
router.get("/message/:userId", authenticate,async (req, res) => {
    try {
        const chatMessages = await ChatMessages.find({ $or: [{ sender: req.params.userId }, { receiver: req.params.userId }] });
        res.status(200).json(chatMessages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
