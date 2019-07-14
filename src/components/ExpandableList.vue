<template>
    <div id="root">
        <div class="arrow arrow--left" id="leftArrow">
            <span></span>
        </div>
        <div id="blurbs">
        <TextBlurb id="blurbOne" height=300 width=300 :text="repos[0].name"/>
        <TextBlurb id="blurbTwo" height=300 width=300 :text="repos[1].name"/>
        <TextBlurb id="blurbThree" height=300 width=300 :text="repos[2].name"/>
        </div>
        <div class="arrow arrow--right" id="rightArrow">
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
    data() {return {
        repos: [{"name":"loading"}],
        rightArrowHover: false,
        
    }},
    created: function(){
        fetch("https://api.github.com/users/Jam20/repos")
        .then(response => {
            return response.json()
            }).then(json => {
                json.sort(function(a,b){
                    var c = new Date(a.updated_at);
                    var d = new Date(b.updated_at);
                    return d-c;
                })
                this.repos = json;
                })
    },
    methods:{
        
    },
    
    computed:{
       
     
    }
    

    
}

</script>

<style lang="scss" scoped>

    #root{
        display:flex;
        width: 100%;
        

    }
    #blurbs{
        display: flex;
        flex-grow: 0;
        width: 80%;
        justify-content: space-around;
        
    }
    #blurbOne{
        flex-grow: 0
    }
    #leftArrow{
        margin-left: 8%
    }
    #rightArrow{

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

