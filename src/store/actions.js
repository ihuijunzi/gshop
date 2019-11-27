
import {reqCategorys,
    reqShops
} from "../api";

import {RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from "./mutation-types";

export default {
    async getCategorys({commit}){
        const result = await reqCategorys();
        commit(RECEIVE_CATEGORYS, {categorys: result.data});
    },

    async getShops({commit, state}){
        const {lat, lng} = state;
        const res = await reqShops(lng, lat);
        commit(RECEIVE_SHOPS, {shops: res.data})
    }
}
