<template>
    <div id="root">
        <div id="padding" v-if="!isLessData"/>
        <div class="arrow arrow--left" id="leftArrow" v-if="isLessData" @click="decrement">
            <span></span>
        </div>
        <div id="blurbs">
            <TextBlurb class="blurbOne" height=300 width=300 :text="inputData[index].name" @click.native="blurbOneClicked" :class="{blurbOneEnl:blurbOneActive, blurbFade:blurbTwoActive, blurbFade:blurbThreeActive}"/>
            <TextBlurb class="blurbTwo" height=300 width=300 :text="inputData[index+1].name" @click="blurbTwoClicked" :class="{blurbTwoEnl:blurbTwoActive, blurbFade:blurbOneActive, blurbFade:blurbThreeActive}"/>
            <TextBlurb class="blurbThree" height=300 width=300 :text="inputData[index+2].name" @click="blurbThreeClicked" :class="{blurbThreeEnl:blurbThreeActive, blurbFade:blurbTwoActive, blurbFade:blurbOneActive}"/>
        </div>
        <div class="arrow arrow--right" id="rightArrow" v-if="isMoreData"  @click="incrment">
            <span></span>
        </div>
    </div>
</template>


<script>
import TextBlurb from "../components/TextBlurb"


export default {
    components: {
        TextBlurb,
    },
    props:{
        inputData: Array
    },
    data() {return {
        index: 0,
        blurbOneActive: false,
        blurbTwoActive: false,
        blurbThreeActive: false,
    }},
    
    methods:{
        incrment:function(){
            this.index++;
        },
        decrement:function(){
            this.index--;
        },

        blurbOneClicked(){
            console.log("clicked");
            this.blurbOneActive = true;
        },
        blurbTwoClicked(){
            this.blurbTwoActive = true;

        },
        blurbThreeClicked(){
            this.blurbThreeActive = true;

        },
    },
    
    computed:{
       
       isMoreData: function(){
           return this.index+2<this.inputData.length-1
       },

       isLessData: function(){
           return this.index!=0
       }
    }
    

    
}

</script>

<style lang="scss" scoped>

    #root{
        display:flex;
        width: 100%;
        

    }
    #blurbs{
        position: relative;
        width: 70%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .blurbOne{
        position: absolute;
        left:0%;
    }
    .blurbTwo{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0)
    }
    .blurbThree{
        position: absolute;
        left: 100%;
        transform: translate(-100%,0)
    }
    #leftArrow{
        margin-left: 8.2%
    }
    #padding{
        padding-left: 10%
    }

    .blurbFade{
        animation-name: fadeOut;
        animation-duration: 150ms;
    }

    .blurbOneEnl{
        width:100%;
        animation-name: blurbOneEnlarge;
        animation-delay: 100ms;
        animation-duration: 200ms;
    }
    
    .blurbTwoEnl{
        animation-name: blurbTwoEnlarge;
        animation-delay: 100ms;
        animation-duration: 200ms;
    }
    
    .blurbThreeEnl{
        animation-name: blurbThreeEnlarge;
        animation-delay: 100ms;
        animation-duration: 200ms;
    }

    @keyframes fadeOut{
        0%{
            width:300px;
            opacity: 1;
        }
        100%{
            opacity:0%;
        }
    }
    @keyframes blurbOneEnlarge{
        0%{
            left: 0%;
        }
        50%{
            left:50%;
            transform:translate(-50%,0);
        }
        100%{
            width: 100%;
        }
    }
    @keyframes blurbeTwoEnlarge{
        0%{
            opacity: 1;
        }
        100%{
            opacity:0%;
        }
    }
    @keyframes blurbThreeEnlarge{
        0%{
            opacity: 1;
        }
        100%{
            opacity:0%;
        }
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

