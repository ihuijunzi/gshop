<template>
    <div v-show="$route.meta.showFootGuide">
        <footer class="footer_guide border-1px">
            <a href="javascript:void (0)" class="guide-item" :class="{on:currentPath('/msite')}" @click="goto('/msite')">
                <span class="item-icon">
                    <i class="iconfont icon-waimai"></i>
                </span>
                <span>外卖</span>
            </a>
            <a href="javascript:void (0)" class="guide-item" :class="{on:currentPath('/search')}" @click="goto('/search')">
                <span class="item-icon">
                    <i class="iconfont icon-search"></i>
                </span>
                <span>搜索</span>
            </a>
            <a href="javascript:void (0)" class="guide-item" :class="{on:currentPath('/order')}" @click="goto('/order')">
                <span class="item-icon">
                    <i class="iconfont icon-dingdan"></i>
                </span>
                <span>订单</span>
            </a>
            <a href="javascript:void (0)" class="guide-item" :class="{on:currentPath('/profile')}" @click="goto('/profile')">
                <span class="item-icon">
                    <i class="iconfont icon-geren"></i>
                </span>
                <span>我的</span>
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "FooterGuide",
        data(){
            return{

            }
        },
        computed:{

        },
        methods:{
            currentPath(path){
                return path === this.$route.fullPath
            },
            goto(path){
                if(path !== this.$route.fullPath){
                    this.$router.replace(path);
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .footer_guide
        top-border-1px(#e4e4e4)
        width 100%
        height 50px
        position fixed
        bottom 0
        left 0
        display flex
        background-color #ffffff
        .guide-item
            flex 1
            display flex
            flex-direction column
            align-items center
            text-align center
            margin 5px
            color #999999
            &.on
                color #02a774
            span
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 22px
</style>
