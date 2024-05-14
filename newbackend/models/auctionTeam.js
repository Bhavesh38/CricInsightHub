import mongoose from "mongoose";
const { Schema } = mongoose;

const auctionTeamSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String},
    image: { type: String},
    teamMembers:[{type: String}],
    players: [{ type: mongoose.Types.ObjectId, ref: 'AuctionPlayers' }],
    purse:{ type: Number, required: true },
    auctionId: { type: mongoose.Types.ObjectId, ref: 'Auctions' },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

const AuctionTeams = mongoose.model('AuctionTeams', auctionTeamSchema);
export default AuctionTeams;