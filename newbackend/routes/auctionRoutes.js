import express from "express";
import authenticate from "../middleware/auth.js";
import Auctions from "../models/AuctionModel.js";

const router=express.Router();


router.get("/getyourauction",authenticate,async (req,res)=>{
    //  const {id}=req.params;
        const userId=req.user._id;
        console.log(userId);

        try{
            // title: { type: String, required: true },
        // images: [String],
        // likes: [{ type: mongoose.Types.ObjectId, ref: 'Users' }],
        // reports: [{type: mongoose.Types.ObjectId,ref: 'Users'}],
        // owners: [{ type: mongoose.Types.ObjectId, ref: 'Users' }],
        // teams: [{ type: mongoose.Types.ObjectId, ref: 'Users' }],
        // description:{type:String},
        // players:[{ type: mongoose.Types.ObjectId, ref: 'AuctionPlayers' }],
        // hasStarted:false,
        // hasEnded:false,
        // createdBy: { type: String, required: true },
        // createdAt: { type: Date, default: Date.now },
        // get all auction having id same as createdBy or userid inside owners array or inside teams array
        const auctions=await Auctions.find({$or:[{createdBy:userId},{owners:userId},{teams:userId}]});
        res.status(200).json(auctions);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

export default router;