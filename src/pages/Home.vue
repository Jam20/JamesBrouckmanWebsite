<template>
    <div id="HomePage">
        <div id="SectionOne">
            <img id="BackgroundImgOne" src="https://via.placeholder.com/1920x1080"/>
            <div id="Title">
                <h1>James Brouckman</h1>
                <div id="line"/>
                <h2>Computer Engineering Student</h2>
            </div>
        </div>
        <div id="SectionTwo">
            <div id="ProjectsTitle">
                <h1>Recent Projects</h1>
            </div>
        </div>
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
    @import url("../Variables.css");
    #HomePage{
        position: absolute;
        top: 0%;
         font-family: -'Segoe UI';
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
        color: var(--ForgroundPrimary);
    }
    #Title h1{
        font-size: 45pt;
        margin-bottom: 2%;
    }
    #line{
        width:100%;
        height: 3px;
        background-color: var(--ForgroundPrimary);
    } 
    #ProjectsTitle h1{
        text-align: center;
        width: 100%;
        font-size: 25pt;
        color: var(--ForgroundPrimary);
    }

</style>
