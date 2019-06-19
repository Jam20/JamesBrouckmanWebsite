<template>
    <div id="BlurbBorder" :style="BoxStyle">
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    
    props: {
        height: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: false,
        },
        text:{
            type: String,
            required: true,
        },
        backgroundColor: {
            type: String,
            default: "#ffffff",
        }
    },
    data(){
        return{
          BoxStyle:{
            backgroundColor: this.backgroundColor,
            height: this.height+"px",
            width: this.width+"px"
        }
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>
    #BlurbBorder{
        border-radius: 20%
    }
    #BlurbBorder p{
        margin-bottom: 2%;
        margin-left: 5%
    } 
</style>
