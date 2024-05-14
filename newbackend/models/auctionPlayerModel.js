import mongoose from "mongoose";
const { Schema } = mongoose;

const auctionPlayerSchema = new Schema({
    name:{type:String, required:true},
    role:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String},
    about:{type:String},
    basePrice:{type:Number},
    soldPrice: { type: Number},
    currentPrice: { type: Number},
    hasSold: { type:Boolean, default:false},
    hasParticipated:{type:Number, default:0},
    auctionId: { type: mongoose.Types.ObjectId, ref: 'Auctions' },
    currentTeamId: { type: mongoose.Types.ObjectId, ref: 'Teams' },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: true }
})

const AuctionPlayers = mongoose.model('AuctionPlayers', auctionPlayerSchema);
export default AuctionPlayers;