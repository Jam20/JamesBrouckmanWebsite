<template>
    <div id="HomePage">
        <img id="BackgroundImgOne" src="https://via.placeholder.com/1920x750"/>
        <div id="Title">
            <h1>James Brouckman</h1>
            <div id="line"/>
            <h2>Computer Engineering Student</h2>
        </div>
        <textBlurb class="InfoBlurb" :height="300" :width="250" text="Hello World"></textBlurb>

    </div>
</template>
<script>
import TextBlurb from "../components/TextBlurb"

export default {

    components: {
        TextBlurb
    }    
}
</script>
<style scoped>
    #HomePage{
        position: absolute;
        top: 0%;
    }
    .InfoBlurb{
        position: absolute;
        top:20%;
        right:20%;
    }
    #Title{
        position: absolute;
        top: 40%;
        left:20%;
        font-family: -'Segoe UI';
        color: white;
    }
    #Title h1{
        font-size: 45pt;
        margin-bottom: 2%;
    }
    #line{
        width:100%;
        height: 3px;
        background-color: white;
    }
</style>
