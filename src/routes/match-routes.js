const serverConfig = require('../config/config')
const cors = require('cors')
const fetch = require("node-fetch");

module.exports = (app) => {

    app.use(cors());

    app.get(`${serverConfig.BASE_URL}/getChallengerEUNE`, cors(), async (req, res) => {
        try {
            const response = await fetch(`https://eun1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${serverConfig.API_KEY}`, cors())
            const data = await response.json();
            const ids = data.entries.map((item) => item.summonerId)
            console.log(ids)
            res.status(200).json(ids);
        } catch (error) {
            res.status(500).send('Something went wrong!');
        }
    });

    app.get(`${serverConfig.BASE_URL}/getPuuid/:summonerId`, cors(), async (req, res) => {
        try {
            const response = await fetch(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/${req.params.summonerId}?api_key=${serverConfig.API_KEY}`, cors())
            const data = await response.json();

            if (!data.puuid) return res.status(404).send('SummonerId not found!');

            res.status(200).json(data.puuid);
        } catch (error) {
            res.status(500).send('Something went wrong!');
        }
    });

    app.get(`${serverConfig.BASE_URL}/getListMatches/:puuid/:page`, cors(), async (req, res) => {
        try {
            const startList = req.params.page * 20 - 20;
            const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.params.puuid}/ids?start=${startList}&count=20&api_key=${serverConfig.API_KEY}`, cors())
            const data = await response.json();

            if (!data) return res.status(404).send('Puuid not found!');

            res.status(200).json(data);
        } catch (error) {
            res.status(500).send('Something went wrong!');
        }
    });

    app.get(`${serverConfig.BASE_URL}/getMatch/:matchId`, cors(), async (req, res) => {
        try {
            const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${req.params.matchId}?api_key=${serverConfig.API_KEY}`, cors())
            const data = await response.json();

            if (!data) return res.status(404).send('Match not found!');

            res.status(200).json(data);
        } catch (error) {
            res.status(500).send('Something went wrong!');
        }
    });
}