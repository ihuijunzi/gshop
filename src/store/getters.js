
export default {
    totalCount(state){
        return state.cartFoods.reduce((preTotal, cur) => preTotal + cur.count, 0)
    },

    totalPrice(state){
        return state.cartFoods.reduce((preTotal, cur) => preTotal + cur.price * cur.count, 0)
    },

    positiveSize(state){
        return state.ratings.reduce((preTotal, cur)=> preTotal + (cur.rateType === 0 ? 1: 0), 0)
    }
}
