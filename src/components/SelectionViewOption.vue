<template>
    <div id="selectionViewOption" :style="{ backgroundcolor: color}">
        <h3> {{title}} </h3>
        <img :src="require('../assets/' + imageURL + '.jpg')">
    </div>
</template>

<script>
export default {
    props: {

        imageURL: String,
        title: String,
        color: {
            type: String,
            default: "#ffffff"
    },
    computed: {
        
    }
}
</script>

<style scoped>

#selectionViewOption{
    position: relative;
    left: 0%;
    background-color: red;
    
    height: 10vh;
}
#selectionViewOption img{
    position: relative;
    top: 0%;
    left: 0%;
    opacity: 80%;
    width: 100%;
    max-height: 10vh;
    object-fit: cover;
    zoom: 1;
    z-index: 0;
    filter: contrast(80%);
}
#selectionViewOption h3{
    position: absolute;
    font-family: 'Titillium Web', sans-serif;
    top: 2vh;
    color: white;
    left: 25%;
    font-size:4vh;
    margin-top: 0;
    z-index: 1;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
}

#selectionViewOption:hover h3{
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
}
#selectionViewOption:hover img{
    opacity: 60%;
}




</style>