    <template>
    <div id="HomePage">
       <img id="BackgroundImgOne" src="../assets/AboutBackground.jpg"/>
            <div id="Title">
                <h1>James Brouckman</h1>
                <div id="line"/>
                <h2>Computer Engineering Student</h2>
            </div>
    </div>
</template>
<script>


export default {
    components: {
    },
}
</script>
<style scoped>
    @import url("../Variables.css");
    #HomePage{
        position: relative;
        
        font-family: -'Segoe UI';
    }
    #BackgroundImgOne{
        max-height:100vh;
        width: 100%;
        filter: brightness(100%)
    }
    #Title{
        position: absolute;
        top: 40%;
        left:12.5%;
        color: white;
    }
    #Title h1{
        font-size: 3vw;
        margin-bottom: 2%;
    }
    #Title h2{
        font-size: 1.5vw;
    }
    #line{
        width:100%;
        height: 3px;
        background-color: white;
    } 
    #line2{
        position: relative;
        width:90%;
        top:27.5%;
        left: 50%;
        transform: translate(-50%,0);
        height: 3px;
        background-color: var(--ForgroundPrimary);
    } 
</style>
