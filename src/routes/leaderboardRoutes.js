import fetch from "node-fetch";
import cors from 'cors';

import LeaderboardPlayers from '../models/leadearboard-players-model.js';

import serverConfig from '../config/index.js';

export default (app) => {

    app.use(cors());

    app.get(`${serverConfig.BASE_URL}/getLeaderboard/:region/:gameMode`, cors(), async (req, res) => {
        const response = await fetch(`${serverConfig.PUBG_API}/${req.params.region}/leaderboards/${serverConfig.SEASON}/${req.params.gameMode}`,
            {
                headers: {
                    'Authorization': `Bearer ${serverConfig.API_KEY}`,
                    'Accept': 'application/vnd.api+json'
                }
            }, cors());

        const data = await response.json();


        const leaderboardTop100 = data.included.filter(item => item.attributes.rank <= 100);
        const sortedLeaderboardTop100 = leaderboardTop100.sort((a, b) => a.attributes.rank - b.attributes.rank);

        res.status(200).json(sortedLeaderboardTop100);
    });

    app.get(`${serverConfig.BASE_URL}/getLeaderboardData`, cors(), async (req, res) => {
        try {
            LeaderboardPlayers.find({}).sort({ 'createdDate': -1 }).exec((err, results) => {
                console.log(results);
                if (results)
                    return res.status(200).json(results)
                if (err)
                    return res.status(404).send("Not found")
            });
        } catch (err) {
            return res.status(500).send("Something went wrong")
        }
    })

    app.post(`${serverConfig.BASE_URL}/setLeaderboardData/:region/:gameMode/:numberOfPlayers`, cors(), async (req, res) => {
        const response = await fetch(`${serverConfig.PUBG_API}/${req.params.region}/leaderboards/${serverConfig.SEASON}/${req.params.gameMode}`,
            {
                headers: {
                    'Authorization': `Bearer ${serverConfig.API_KEY}`,
                    'Accept': 'application/vnd.api+json'
                }
            }, cors());

        const data = await response.json();

        const leaderboardTop100 = data.included.filter(item => item.attributes.rank <= req.params.numberOfPlayers);
        const sortedLeaderboardTop100 = leaderboardTop100.sort((a, b) => a.attributes.rank - b.attributes.rank);

        let collectedData = {
            rankPoints: 0,
            wins: 0,
            games: 0,
            winRatio: 0,
            averageDamage: 0,
            kills: 0,
            killDeathRatio: 0,
            kda: 0,
            averageRank: 0
        };

        collectedData = sortedLeaderboardTop100.reduce((prev, curr) => ({
            ...collectedData,
            rankPoints: (prev.rankPoints ? prev.rankPoints : 0) + curr.attributes.stats.rankPoints,
            wins: (prev.wins ? prev.wins : 0) + curr.attributes.stats.wins,
            games: (prev.games ? prev.games : 0) + curr.attributes.stats.games,
            winRatio: (prev.winRatio ? prev.winRatio : 0) + (curr.attributes.stats.wins / curr.attributes.stats.games * 100),
            averageDamage: (prev.averageDamage ? prev.averageDamage : 0) + curr.attributes.stats.averageDamage,
            kills: (prev.kills ? prev.kills : 0) + curr.attributes.stats.kills,
            killDeathRatio: (prev.killDeathRatio ? prev.killDeathRatio : 0) + curr.attributes.stats.killDeathRatio,
            kda: (prev.kda ? prev.kda : 0) + curr.attributes.stats.kda,
            averageRank: (prev.averageRank ? prev.averageRank : 0) + curr.attributes.stats.averageRank,
        }), 0);

        const dataToDb = new LeaderboardPlayers({
            ...collectedData,
            topNumberOfPlayers: sortedLeaderboardTop100.length,
            region: req.params.region,
            gameMode: req.params.gameMode,
            date: Date()
        });

        const doc = await dataToDb.save();

        res.status(200).json(doc);
    });
}