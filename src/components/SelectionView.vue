<template>
    <div id="SelectionView" >
        <template v-for="(option, index) in SelectorData">
            <SelectionViewOption :key="'A-' + index" :title="option.title" :imageURL="option.imageURL" :color="option.color"
             @mouseenter.native="optionHover = index" @mouseleave.native="resetAnimations()" @click.native="optionSelected = index" :class="{'optionHover' : optionHover == index}"/>
            <SelectionOption     :key="'B-' + index" :imageURL="SelectionOptionData[index].imageURL" v-show="optionSelected==index"
             :class="{'optionHover': optionHover==10,'optionSelected' : optionSelected == index, 'optionDeselected' : optionDeselected == index}" class="optionStyle" :style="{height: (SelectorData.length*10) + 'vh'}"
             @backBtnClick="resetSelection(index)"/>
        </template>

    </div>
</template>

<script>
import SelectionViewOption from "./SelectionViewOption"
import SelectionOption from "./SelectionOption"
export default {

    components:{
        SelectionViewOption,
        SelectionOption
    },
    props: {
        SelectionOptionData:{
            type: Array
        },

        SelectorData: {
            type: Array,
            default: () => [{title: "Data Not Found", imageURL: require('../assets/TestBackground.jpg'), color: "Black"}]
        },
    },
    data(){
        return{
            optionHover: -1,
            optionSelected: -1,
            optionDeselected: -1
        }
    },

    methods: {
        resetAnimations: function(){
            this.optionHover      = -1;
            this.optionDeselected = -1;
        },
        resetSelection: function(index){
            this.optionDeselected = index;
            this.optionSelected = -1;
        }
    }
}
</script>

<style scoped>
.optionStyle{
    position: absolute;
    top: 0%;
    left: 0;
    z-index: 2;
    width: 100%;
}
#SelectionView{
    position: relative;
    overflow: hidden;
}
.optionHover{
    animation: showSliver .4s forwards;
}
.optionSelected{
    animation: expandOption .3s forwards ease-in-out;
}
.optionDeselected{
    animation: shrinkOption .4s forwards ease-in-out;
}



@keyframes showSliver {
    0% {
        transform: scale(1);
    }
    50%{
        transform: scale(1.3);
    }
    100% {
        transform: scale(1.2);
    }
    
}
@keyframes expandOption {
    0% {
        max-height: 0;
    }
    100% {
        max-height: 30vh;
        }
    
}
</style>