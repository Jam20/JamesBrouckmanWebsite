<template>
    <div class="BlurbBorder" :style="BoxStyle">
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    
    props: {
        height: {
            type: String,
            required: true,
        },
        width: {
            type: String,
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
    .BlurbBorder{
        border-radius: 25%;
        vertical-align: center;
    }
    .BlurbBorder p{
        vertical-align: center;
        margin-bottom: 10%;
        margin-left: 10%
    } 
</style>
