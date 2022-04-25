import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const maxSurvivalMastery = new mongoose.Schema({
    totalAirDropsCalled: {
        type: Number,
    },
    averageAirDropsCalled: {
        type: Number,
    },
    totalDamageDealt: {
        type: Number,
    },
    averageDamageDealt: {
        type: Number,
    },
    totalDamageTaken: {
        type: Number,
    },
    averageDamageTaken: {
        type: Number,
    },
    averageDistanceBySwimming: {
        type: Number,
    },
    averageDistanceByVehicle: {
        type: Number,
    },
    averageDistanceOnFoot: {
        type: Number,
    },
    averageDistanceTotal: {
        type: Number,
    },
    totalHealed: {
        type: Number,
    },
    averageHealed: {
        type: Number,
    },
    totalHotDropLandings: {
        type: Number,
    },
    totalEnemyCratesLooted: {
        type: Number,
    },
    averageEnemyCratesLooted: {
        type: Number,
    },
    totalUniqueItemsLooted: {
        type: Number,
    },
    averageUniqueItemsLooted: {
        type: Number,
    },
    averagePosition: {
        type: Number,
    },
    totalRevived: {
        type: Number,
    },
    averageRevived: {
        type: Number,
    },
    totalTeammatesRevived: {
        type: Number,
    },
    averageTeammatesRevived: {
        type: Number,
    },
    totalTimeSurvived: {
        type: Number,
    },
    averageTimeSurvived: {
        type: Number,
    },
    totalThrowablesThrown: {
        type: Number,
    },
    averageThrowablesThrown: {
        type: Number,
    },
    top10: {
        type: Number,
    },
    region: {
        type: String,
    },
    date: {
        type: Date,
    }
});

export default mongoose.model('MaxSurvivalMastery', maxSurvivalMastery);