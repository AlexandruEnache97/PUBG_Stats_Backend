import fetch from "node-fetch";
import cors from 'cors';

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
}