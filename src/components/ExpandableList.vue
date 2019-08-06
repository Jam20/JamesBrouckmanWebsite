<template>
    <div id="root">
        <div id="padding" v-if="!isLessData"/>
        <div class="arrow arrow--left" id="leftArrow" v-if="isLessData" @click="decrement">
            <span></span>
        </div>
        <div id="listBox">
            <div class="itemOne">
                <slot class="itemOne" :itemData="itemOneData"/>
            </div>
            <div class="itemTwo">
                <slot class="itemTwo" :itemData="itemTwoData"/>
            </div>
            <div class="itemThree">
                <slot class="itemThree" :itemData="itemThreeData"/>
            </div>

          
        </div>
        <div class="arrow arrow--right" id="rightArrow" v-if="isMoreData"  @click="incrment">
            <span></span>
        </div>
        <div id="padding" v-if="!isMoreData"/>
    </div>
</template>


<script>


export default {

    props:{
        inputData: Array,
    },
    data() {return {
        index: 0,

    }},
    
    
    methods:{
        incrment:function(){
            this.index++;
        },
        decrement:function(){
            this.index--;
        },
    },
    
    computed:{
       
       isMoreData: function(){
            return this.index+2<this.inputData.length-1
       },

       isLessData: function(){
           return this.index!=0
       },

       itemOneData: function(){
           return this.inputData[this.index];
       },
       itemTwoData: function(){
           return this.inputData[this.index+1];
       },
       itemThreeData: function(){
           return this.inputData[this.index+2];
       },


    }
    

    
}

</script>

<style lang="scss" scoped>

    #root{
        display:flex;
        width: 100%;
        background: transparent;
    }
    #listBox{
        position: relative;
        width: 100%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .itemOne{
        position: absolute;
        left:0%;
    }
    .itemTwo{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0)
    }
    .itemThree{
        position: absolute;
        left: 100%;
        transform: translate(-100%,0)
    }
    #leftArrow{
        margin-left: 3%
    }
    #rightArrow{
        margin-right: 3%
    }
    #padding{
        width: 106.5px;
    }


    .arrow {
        flex-grow: 0;
        padding-top: 175px;
        $size: 50px;
        $width: 2px;
        
        cursor: pointer;
        display: block;
        width: $size / 1.414;
        height: $size / 1.414 * 2;
        position: relative;
  
        & span,
        &:before,
        &:after {
            background: #fff;
            content: '';
            display: block;
            width: $size;
            height: $width;
            position: absolute;
            top: calc(50% - (#{$width} / 2));
        }
    
        &:before {
            transform: rotate(-45deg);
        }
        &:after {
            transform: rotate(45deg);
        }
  
       & span {
            width: 0;
        }
        &:hover span {
            width: $size * 1.414;
        }
  
        @each $direction in 'left' 'right' {
            &.arrow--#{$direction} {
                & span,
                &:before,
                &:after {
                    #{$direction}: 0;
                    transform-origin: #{$direction} 50%;
                }

                &:before,
                &:after {
                    transition: #{$direction} 0.3s 0.05s;
                }

                & span {
                    transition: width 0.3s, #{$direction} 0.3s 0.05s;
                }

                &:hover {
                    & span,
                    &:before,
                    &:after {
                    #{$direction}: $size / 1.414 * -1;
                    }
                }
            }
        }
    }
  
</style>

