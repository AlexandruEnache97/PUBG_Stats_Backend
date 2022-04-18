import fetch from "node-fetch";
import cors from 'cors';

import serverConfig from '../config/index.js';

export default (app) => {

    app.use(cors());

    app.get(`${serverConfig.BASE_URL}/getSurvivalMastery/:region/:accountId`, cors(), async (req, res) => {
        const response = await fetch(`${serverConfig.PUBG_API}/${req.params.region}/players/${req.params.accountId}/survival_mastery`,
            {
                headers: {
                    'Authorization': `Bearer ${serverConfig.API_KEY}`,
                    'Accept': 'application/vnd.api+json'
                }
            }, cors());

        const data = await response.json();

        res.status(200).json(data);
    });

    app.get(`${serverConfig.BASE_URL}/getWeaponMastery/:region/:accountId`, cors(), async (req, res) => {
        const response = await fetch(`${serverConfig.PUBG_API}/${req.params.region}/players/${req.params.accountId}/weapon_mastery`,
            {
                headers: {
                    'Authorization': `Bearer ${serverConfig.API_KEY}`,
                    'Accept': 'application/vnd.api+json'
                }
            }, cors());

        const data = await response.json();
        res.status(200).json(data);
    });
}