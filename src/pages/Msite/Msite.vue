<template>
    <div class="msite">
        <HeaderTop title="深圳市南山区科技园">
            <a class="header_search" slot="search" @click="$router.push('/search')">
                <i class="iconfont icon-sousuo"></i>
            </a>
            <a class="header_login" slot="login" @click="$router.push('/login')">
                <span class="header_login_text">登录|注册</span>
            </a>
        </HeaderTop>

        <div class="miste-content-wrapper">
            <div class="miste-content">
                <nav class="msite_nav">
                    <div class="swiper-container" v-if="categorys.length">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(categorysItem, index) in categorysArr" :key="index">
                                <a href="javascript:void(0)" class="link_to_food" v-for="(category, idx) in categorysItem" :key="idx">
                                    <div class="food_container">
                                        <img :src="baseImageUrl + category.image_url">
                                    </div>
                                    <span>{{category.title}}</span>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
<!--                    <div class="swiper-container" v-if="categorys.length">-->
<!--                        <div class="swiper-wrapper">-->
<!--                            <swiper :options="swiperOption">-->
<!--                                <swiper-slide v-for="(categorysItem, index) in categorysArr" :key="index">-->
<!--                                    <a href="javascript:void(0)" class="link_to_food" v-for="(category, idx) in categorysItem" :key="idx">-->
<!--                                        <div class="food_container">-->
<!--                                            <img :src="baseImageUrl + category.image_url">-->
<!--                                        </div>-->
<!--                                        <span>{{category.title}}</span>-->
<!--                                    </a>-->
<!--                                </swiper-slide>-->
<!--                                <div class="swiper-pagination" slot="pagination"></div>-->
<!--                            </swiper>-->
<!--                        </div>-->
<!--                    </div>-->
                    <img src="./images/msite_back.svg" v-else>
                </nav>
                <div class="msite_shop_list border-1px">
                    <div class="shop_header">
                        <i class="iconfont icon-xuanxiang"></i>
                        <span class="shop_header_title">附近商家</span>
                    </div>
                    <ShopList></ShopList>
                </div>
            </div>
        </div>


    </div>


</template>

<script>
    import {mapState} from 'vuex'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    // import 'swiper/dist/css/swiper.css'
    // import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import BScroll from 'better-scroll'

    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import ShopList from '../../components/ShopList/ShopList'

    export default {
        name: "Msite",
        components: {
            HeaderTop,
            ShopList,
            // swiper,
            // swiperSlide
        },
        data(){
          return{
              // swiperOption:{
              //     pagination: {
              //         el: '.swiper-pagination'
              //     }
              // },
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
        async mounted() {
            this.$store.dispatch('getShops');
            await this.$store.dispatch('getCategorys');
            // new Swiper('.swiper-container', {
            //     pagination: {
            //         el: '.swiper-pagination',
            //     },
            //     loop: true
            // });
        },
        watch:{
            categorys(){
                this.$nextTick(()=>{
                    new Swiper('.swiper-container', {
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        loop: true
                    });

                    new BScroll('.miste-content-wrapper', {
                        click: true
                    })
                });

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
