import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const leaderboardPlayersSchema = new mongoose.Schema({
    rankPoints: {
        type: Number,
    },
    wins: {
        type: Number,
    },
    games: {
        type: Number,
    },
    winRatio: {
        type: Number,
    },
    averageDamage: {
        type: Number,
    },
    kills: {
        type: Number,
    },
    killDeathRatio: {
        type: Number,
    },
    kda: {
        type: Number,
    },
    averageRank: {
        type: Number,
    },
    topNumberOfPlayers: {
        type: Number,
    },
    region: {
        type: String,
    },
    gameMode: {
        type: String,
    },
    date: {
        type: Date,
    }
});

export default mongoose.model('LeaderboardPlayers', leaderboardPlayersSchema);