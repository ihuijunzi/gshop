<template>
    <div class="msite">
        <HeaderTop title="深圳市南山区科技园">
            <a class="header_search" slot="search">
                <i class="iconfont icon-sousuo"></i>
            </a>
            <a class="header_login" slot="login">
                <span class="header_login_text">登录|注册</span>
            </a>
        </HeaderTop>
        <div class="miste-content-wrapper">
            <div class="miste-content">
                <nav class="msite_nav border-1px">
                    <div class="swiper-container" v-if="categorys.length">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(categorysItem, index) in categorysArr" :key="index">
                                <a href="javascript:void(0)" class="link_to_food" v-for="(category, idx) in categorysItem" :key="idx">
                                    <div class="food_container">
                                        <img :src="baseImageUrl + category.image_url">
                                    </div>
                                    <span>甜品饮品</span>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <img src="./images/msite_back.svg" v-else>
                </nav>
            </div>
        </div>

        <div class="msite_shop_list border-1px">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <div class="shop_container">

            </div>
        </div>
    </div>


</template>

<script>
    import {mapState} from 'vuex'
    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import Swiper from 'swiper';

    export default {
        name: "Msite",
        components: {
            HeaderTop
        },
        data(){
          return{
              baseImageUrl :'https://fuss10.elemecdn.com'
          }
        },
        computed:{
            ...mapState(['categorys']),
            categorysArr(){
                // console.log(this);
                let {categorys} = this;
                // 准备空的2维数组
                const arr = [];
                // 准备一个小数组(最大长度为8)
                let minArr = [];
                // 遍历categorys
                categorys.forEach(c => {
                    // 如果当前小数组已经满了, 创建一个新的
                    if(minArr.length===8) {
                        minArr = []
                    }
                    // 如果minArr是空的, 将小数组保存到大数组中
                    if(minArr.length===0) {
                        arr.push(minArr)
                    }
                    // 将当前分类保存到小数组中
                    minArr.push(c)
                });

                return arr


            }
        },
        created(){

        },
        mounted() {
            this.$store.dispatch('getCategorys');

        },
        watch:{
            categorys(){
                this.$nextTick(()=>{
                    new Swiper('.swiper-container', {
                        pagination: {el: '.swiper-pagination'},
                        loop: true
                    })
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .msite  //首页
        width 100%
        .miste-content-wrapper
            position fixed
            top: 45px
            bottom: 46px
            width: 100%
            .msite_nav
                bottom-border-1px(#e4e4e4)
                margin-top 15px
                height 200px
                background #fff
                .swiper-container
                    width 100%
                    height 100%
                    .swiper-wrapper
                        width 100%
                        height 100%
                        .swiper-slide
                            display flex
                            justify-content center
                            align-items flex-start
                            flex-wrap wrap
                            .link_to_food
                                width 25%
                                .food_container
                                    display block
                                    width 100%
                                    text-align center
                                    padding-bottom 10px
                                    font-size 0
                                    img
                                        display inline-block
                                        width 50px
                                        height 50px
                                span
                                    display block
                                    width 100%
                                    text-align center
                                    font-size 13px
                                    color #666
                    .swiper-pagination
                        >span.swiper-pagination-bullet-active
                            background #02a774
            .msite_shop_list
                top-border-1px(#e4e4e4)
                margin-top 10px
                background #fff
                .shop_header
                    padding 10px 10px 0
                    .shop_icon
                        margin-left 5px
                        color #999
                    .shop_header_title
                        color #999
                        font-size 14px
                        line-height 20px
</style>
