
import {RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-types'

export default {
    [RECEIVE_CATEGORYS](state, {categorys}){
        state.categorys = categorys;
    },

    [RECEIVE_SHOPS](state, {shops}){
        state.shops = shops;
    }
}
