import mongoose from "mongoose";
const { Schema } = mongoose;

const auctionSchema = new Schema({
    title: { type: String, required: true },
    images: [String],
    likes: [{ type: mongoose.Types.ObjectId, ref: 'Users' }],
    reports: [{type: mongoose.Types.ObjectId,ref: 'Users'}],
    owners: [{ type: mongoose.Types.ObjectId, ref: 'Users' }],
    teams: [{ type: mongoose.Types.ObjectId, ref: 'Users' }],
    description:{type:String},
    players:[{ type: mongoose.Types.ObjectId, ref: 'AuctionPlayers' }],
    hasStarted:{type:Boolean, default:false},
    hasEnded:{type:Boolean, default:false},
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const Auctions = mongoose.model('Auctions', auctionSchema);
export default Auctions;