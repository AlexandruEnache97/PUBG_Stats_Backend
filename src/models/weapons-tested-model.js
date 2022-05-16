import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const weaponsTestedSchema = new mongoose.Schema({
    Item_Weapon_ACE32_C: {
        type: Number,
    },
    Item_Weapon_AK47_C: {
        type: Number,
    },
    Item_Weapon_AUG_C: {
        type: Number,
    },
    Item_Weapon_AWM_C: {
        type: Number,
    },
    Item_Weapon_Berreta686_C: {
        type: Number,
    },
    Item_Weapon_BerylM762_C: {
        type: Number,
    },
    Item_Weapon_BizonPP19_C: {
        type: Number,
    },
    Item_Weapon_Crossbow_C: {
        type: Number,
    },
    Item_Weapon_DP12_C: {
        type: Number,
    },
    Item_Weapon_DP28_C: {
        type: Number,
    },
    Item_Weapon_DesertEagle_C: {
        type: Number,
    },
    Item_Weapon_FNFal_C: {
        type: Number,
    },
    Item_Weapon_G18_C: {
        type: Number,
    },
    Item_Weapon_G36C_C: {
        type: Number,
    },
    Item_Weapon_Groza_C: {
        type: Number,
    },
    Item_Weapon_HK416_C: {
        type: Number,
    },
    Item_Weapon_K2_C: {
        type: Number,
    },
    Item_Weapon_Kar98k_C: {
        type: Number,
    },
    Item_Weapon_L6_C: {
        type: Number,
    },
    Item_Weapon_M16A4_C: {
        type: Number,
    },
    Item_Weapon_M1911_C: {
        type: Number,
    },
    Item_Weapon_M249_C: {
        type: Number,
    },
    Item_Weapon_M24_C: {
        type: Number,
    },
    Item_Weapon_M9_C: {
        type: Number,
    },
    Item_Weapon_MG3_C: {
        type: Number,
    },
    Item_Weapon_MP5K_C: {
        type: Number,
    },
    Item_Weapon_Mini14_C: {
        type: Number,
    },
    Item_Weapon_Mk12_C: {
        type: Number,
    },
    Item_Weapon_Mk14_C: {
        type: Number,
    },
    Item_Weapon_Mk47Mutant_C: {
        type: Number,
    },
    Item_Weapon_Mosin_C: {
        type: Number,
    },
    Item_Weapon_NagantM1895_C: {
        type: Number,
    },
    Item_Weapon_P90_C: {
        type: Number,
    },
    Item_Weapon_QBU88_C: {
        type: Number,
    },
    Item_Weapon_QBZ95_C: {
        type: Number,
    },
    Item_Weapon_Rhino_C: {
        type: Number,
    },
    Item_Weapon_SCAR_L_C: {
        type: Number,
    },
    Item_Weapon_SKS_C: {
        type: Number,
    },
    Item_Weapon_Saiga12_C: {
        type: Number,
    },
    Item_Weapon_Sawnoff_C: {
        type: Number,
    },
    Item_Weapon_Thompson_C: {
        type: Number,
    },
    Item_Weapon_UMP_C: {
        type: Number,
    },
    Item_Weapon_UZI_C: {
        type: Number,
    },
    Item_Weapon_VSS_C: {
        type: Number,
    },
    Item_Weapon_Vector_C: {
        type: Number,
    },
    Item_Weapon_Win1894_C: {
        type: Number,
    },
    Item_Weapon_Winchester_C: {
        type: Number,
    },
    Item_Weapon_vz61Skorpion_C: {
        type: Number,
    },
    date: {
        type: Date,
    }
});

export default mongoose.model('WeaponsTested', weaponsTestedSchema);