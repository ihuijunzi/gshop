import Vue from 'vue'

import {RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_ADDFOODCOUNT,
    RECEIVE_SUBFOODCOUNT
} from './mutation-types'

export default {
    [RECEIVE_CATEGORYS](state, {categorys}){
        state.categorys = categorys;
    },

    [RECEIVE_SHOPS](state, {shops}){
        state.shops = shops;
    },

    [RECEIVE_INFO](state, {info}){
        state.info = info
    },

    [RECEIVE_GOODS](state, {goods}){
        state.goods = goods
    },

    [RECEIVE_RATINGS](state, {ratings}){
        state.ratings = ratings
    },

    [RECEIVE_ADDFOODCOUNT](state, {food}){
        if(!food.count){
            Vue.set(food, 'count', 1);
            state.cartFoods.push(food);
        }else{
            food.count++;
        }
    },

    [RECEIVE_SUBFOODCOUNT](state, {food}){
        if(food.count){
            food.count--;
            if(food.count === 0){
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
            }
        }
    },

}
