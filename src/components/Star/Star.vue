<template>
    <div class="star" :class="'star-'+size">
        <span class="star-item"
              v-for="(sc, index) in starClasses"
              :class="sc" :key="index"></span>
    </div>
</template>

<script>
    const STAR_HALF = 'half';
    const STAR_ON = 'on';
    const STAR_OFF = 'off';
    export default {
        name: "star",
        props:{
            score:{
                default: 5
            },
            size:{

            }
        },
        data(){
            return{

            }
        },
        computed:{
            starClasses(){
                let scs = [];
                const onLength = parseInt(this.score);
                for(let i= 0; i < onLength; i++){
                    scs.push(STAR_ON)
                }
                if(this.score * 10 - onLength * 10 >= 5){
                    scs.push(STAR_HALF)
                }
                while(scs.length < 5){
                    scs.push(STAR_OFF)
                }
                return scs
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .star //2x图 3x图
        float left
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('./images/star48_on')
                &.half
                    bg-image('./images/star48_half')
                &.off
                    bg-image('./images/star48_off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star36_on')
                &.half
                    bg-image('./images/star36_half')
                &.off
                    bg-image('./images/star36_off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star24_on')
                &.half
                    bg-image('./images/star24_half')
                &.off
                    bg-image('./images/star24_off')
</style>
