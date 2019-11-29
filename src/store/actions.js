
import {reqCategorys,
    reqShops,
    reqShopInfo,
    reqShopGoods,
    reqShopRatings
} from "../api";

import {RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_ADDFOODCOUNT,
    RECEIVE_SUBFOODCOUNT
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
    },

    async getShopInfo ({commit}){
        const res = await reqShopInfo();
        commit(RECEIVE_INFO, {info: res.data})
    },

    async getShopGoods({commit}){
        const res = await reqShopGoods();
        commit(RECEIVE_GOODS, {goods:res.data})
    },

    async getShopRatings({commit}){
        const res = await reqShopRatings();
        commit(RECEIVE_RATINGS, {ratings:res.data})
    },

    addOrSubFoodCount({commit}, {isAdd, food}){
        if(isAdd){
            commit(RECEIVE_ADDFOODCOUNT, {food});
        }else{
            commit(RECEIVE_SUBFOODCOUNT, {food});
        }
    }
}
