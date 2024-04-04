import express from "express";
import authenticate from "../middleware/auth.js";

const router = express.Router();

router.get("/userdetails", authenticate, (req, res) => {
    res.json({ message: "User Details" });
})

export default router;