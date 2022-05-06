import fetch from "node-fetch";
import cors from 'cors';

import serverConfig from '../config/index.js';
import MaxSurvivalMastery from "../models/max-survival-mastery-model.js";

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

    app.get(`${serverConfig.BASE_URL}/maxSurvivalMastery/:region`, cors(), async (req, res) => {
        try {
            const region = req.params.region;

            MaxSurvivalMastery.findOne({ region }).exec((err, result) => {
                if (result) {
                    return res.status(200).json(result)
                }
                if (err) {
                    return res.status(404).send("Not found")
                }
            });
        } catch (err) {
            return res.status(500).send("Something went wrong");
        }
    });

    app.put(`${serverConfig.BASE_URL}/saveMaxSurvivalMastery/:region`, cors(), async (req, res) => {
        try {
            const body = req.body;
            MaxSurvivalMastery.updateOne({ "region": req.params.region }, {
                $max: {
                    totalAirDropsCalled: body.totalAirDropsCalled,
                    averageAirDropsCalled: body.averageAirDropsCalled,
                    totalDamageDealt: body.totalDamageDealt,
                    averageDamageDealt: body.averageDamageDealt,
                    totalDamageTaken: body.totalDamageTaken,
                    averageDamageTaken: body.averageDamageTaken,
                    averageDistanceBySwimming: body.averageDistanceBySwimming,
                    averageDistanceByVehicle: body.averageDistanceByVehicle,
                    averageDistanceOnFoot: body.averageDistanceOnFoot,
                    averageDistanceTotal: body.averageDistanceTotal,
                    totalHealed: body.totalHealed,
                    averageHealed: body.averageHealed,
                    totalHotDropLandings: body.totalHotDropLandings,
                    totalEnemyCratesLooted: body.totalEnemyCratesLooted,
                    averageEnemyCratesLooted: body.averageEnemyCratesLooted,
                    totalUniqueItemsLooted: body.totalUniqueItemsLooted,
                    averageUniqueItemsLooted: body.averageUniqueItemsLooted,
                    averagePosition: body.averagePosition,
                    totalRevived: body.totalRevived,
                    averageRevived: body.averageRevived,
                    totalTeammatesRevived: body.totalTeammatesRevived,
                    averageTeammatesRevived: body.averageTeammatesRevived,
                    totalTimeSurvived: body.totalTimeSurvived,
                    averageTimeSurvived: body.averageTimeSurvived,
                    totalThrowablesThrown: body.totalThrowablesThrown,
                    averageThrowablesThrown: body.averageThrowablesThrown,
                    top10: body.top10
                }
            }).exec((err, result) => {
                if (result) {
                    return res.status(200).json({ success: true })
                }
                if (err) {
                    return res.status(404).send("Not found")
                }
            });
        } catch (err) {
            return res.status(500).send("Something went wrong");
        }

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


