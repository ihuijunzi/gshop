
import {reqCategorys} from "../api";
import {RECEIVE_CATEGORYS} from "./mutation-types";

export default {
    async getCategorys({commit}){
        const result = await reqCategorys();
        commit(RECEIVE_CATEGORYS, {categorys: result.data});
    }
}
