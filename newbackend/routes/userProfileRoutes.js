import express from "express";
import authenticate from "../middleware/auth.js";
import Users from "../models/userModel.js";

const router = express.Router();

router.get("/userdetails", authenticate, async (req, res) => {
    try {
        const user = await Users.findOne({
            _id: req.user._id,
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const responseData = {
            _id: user._id,
            email: user.email,
            userName: user.userName,
            profilePicture: user.profilePicture,
            friends: user.friends,
            about: user.about
        }
        res.status(200).json(responseData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})
router.post("/updateuserdetails", authenticate, async (req, res) => {
    const { imgUrl, userName, about } = req.body;
    try {
        const user = await Users.findOne({
            _id: req.user._id,
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        //push the latest 
        user.userName = userName;
        user.about = about;
        user.profilePicture = imgUrl;
        await user.save();
        res.status(200).json({ message: "Profile picture updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

export default router;