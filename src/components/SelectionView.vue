<template>
    <div id="SelectionView">
        <template v-for="(option, index) in SelectorData">
            <SelectionViewOption :key="index" :title="option.title" :imageURL="option.imageURL" :color="option.color"/>
            <div :key="index">
                <slot/>
            </div>
        </template>
        <template v-for="(option, index) in SelectedData">
            
        </template>
            

    </div>
</template>

<script>
import SelectionViewOption from "./SelectionViewOption"
import SelectedOption from "./SelectedOption"
export default {

    components:{
        SelectionViewOption,
        SelectedOption
    },
    props: {
        SelectedData:{
            type: Array
        },

        SelectorData: {
            type: Array,
            default: () => [{title: "Data Not Found", imageURL: require('../assets/TestBackground.jpg'), color: "Black"}]
        },
        
    }
}
</script>

<style scoped>

</style>