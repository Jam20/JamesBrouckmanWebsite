<template>
    <div id="HomePage">
        <img id="BackgroundImgOne" src="https://via.placeholder.com/1920x750"/>
        <textBlurb></textBlurb>
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
</style>
