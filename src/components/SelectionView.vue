<template>
    <div id="SelectionView" >
        <template v-for="(option, index) in SelectorData">
            <SelectionViewOption :key="'A-' + index" :title="option.title" :imageURL="option.imageURL" :color="option.color"/>
            <SelectionOption     :key="'B-' + index" :imageURL="SelectionOptionData[index].imageURL" :class="{'selectedOptionStyle': true}" class="optionStyle" :style="{height: (SelectorData.length*10) + 'vh'}" />
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
        
        }
    }
}
</script>

<style scoped>
.optionStyle{
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 1;
    width: 100%;
}
#SelectionView{
    position: relative;
    overflow: hidden;
}
.selectedOptionStyle{

}
</style>