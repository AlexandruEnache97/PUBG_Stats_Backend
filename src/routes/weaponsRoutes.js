import cors from 'cors';

import serverConfig from '../config/index.js';
import WeaponsTested from "../models/weapons-tested-model.js";

export default (app) => {

    app.use(cors());

    app.post(`${serverConfig.BASE_URL}/saveWeaponsTested`, cors(), async (req, res) => {
        try {
            const body = req.body;
            const dataToDb = new WeaponsTested({
                Item_Weapon_ACE32_C: body.Item_Weapon_ACE32_C,
                Item_Weapon_AK47_C: body.Item_Weapon_AK47_C,
                Item_Weapon_AUG_C: body.Item_Weapon_AUG_C,
                Item_Weapon_AWM_C: body.Item_Weapon_AWM_C,
                Item_Weapon_Berreta686_C: body.Item_Weapon_Berreta686_C,
                Item_Weapon_BerylM762_C: body.Item_Weapon_BerylM762_C,
                Item_Weapon_BizonPP19_C: body.Item_Weapon_BizonPP19_C,
                Item_Weapon_Crossbow_C: body.Item_Weapon_Crossbow_C,
                Item_Weapon_DP12_C: body.Item_Weapon_DP12_C,
                Item_Weapon_DP28_C: body.Item_Weapon_DP28_C,
                Item_Weapon_DesertEagle_C: body.Item_Weapon_DesertEagle_C,
                Item_Weapon_FNFal_C: body.Item_Weapon_FNFal_C,
                Item_Weapon_G18_C: body.Item_Weapon_G18_C,
                Item_Weapon_G36C_C: body.Item_Weapon_G36C_C,
                Item_Weapon_Groza_C: body.Item_Weapon_Groza_C,
                Item_Weapon_HK416_C: body.Item_Weapon_HK416_C,
                Item_Weapon_K2_C: body.Item_Weapon_K2_C,
                Item_Weapon_Kar98k_C: body.Item_Weapon_Kar98k_C,
                Item_Weapon_L6_C: body.Item_Weapon_L6_C,
                Item_Weapon_M16A4_C: body.Item_Weapon_M16A4_C,
                Item_Weapon_M1911_C: body.Item_Weapon_M1911_C,
                Item_Weapon_M249_C: body.Item_Weapon_M249_C,
                Item_Weapon_M24_C: body.Item_Weapon_M24_C,
                Item_Weapon_M9_C: body.Item_Weapon_M9_C,
                Item_Weapon_MG3_C: body.Item_Weapon_MG3_C,
                Item_Weapon_MP5K_C: body.Item_Weapon_MP5K_C,
                Item_Weapon_Mini14_C: body.Item_Weapon_Mini14_C,
                Item_Weapon_Mk12_C: body.Item_Weapon_Mk12_C,
                Item_Weapon_Mk14_C: body.Item_Weapon_Mk14_C,
                Item_Weapon_Mk47Mutant_C: body.Item_Weapon_Mk47Mutant_C,
                Item_Weapon_Mosin_C: body.Item_Weapon_Mosin_C,
                Item_Weapon_NagantM1895_C: body.Item_Weapon_NagantM1895_C,
                Item_Weapon_P90_C: body.Item_Weapon_P90_C,
                Item_Weapon_QBU88_C: body.Item_Weapon_QBU88_C,
                Item_Weapon_QBZ95_C: body.Item_Weapon_QBZ95_C,
                Item_Weapon_Rhino_C: body.Item_Weapon_Rhino_C,
                Item_Weapon_SCAR_L_C: body.Item_Weapon_SCAR_L_C,
                Item_Weapon_SKS_C: body.Item_Weapon_SKS_C,
                Item_Weapon_Saiga12_C: body.Item_Weapon_Saiga12_C,
                Item_Weapon_Sawnoff_C: body.Item_Weapon_Sawnoff_C,
                Item_Weapon_Thompson_C: body.Item_Weapon_Thompson_C,
                Item_Weapon_UMP_C: body.Item_Weapon_UMP_C,
                Item_Weapon_UZI_C: body.Item_Weapon_UZI_C,
                Item_Weapon_VSS_C: body.Item_Weapon_VSS_C,
                Item_Weapon_Vector_C: body.Item_Weapon_Vector_C,
                Item_Weapon_Win1894_C: body.Item_Weapon_Win1894_C,
                Item_Weapon_Winchester_C: body.Item_Weapon_Winchester_C,
                Item_Weapon_vz61Skorpion_C: body.Item_Weapon_vz61Skorpion_C,
                date: Date()
            });

            const doc = await dataToDb.save();

            res.status(200).json(doc);
        } catch (err) {
            return res.status(500).send("Something went wrong");
        }

    });
}


