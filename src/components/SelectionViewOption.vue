<template>
    <div id="selectionViewOption" :style="{ backgroundColor: color}" >
        <h3> {{title}} </h3>
        <img :src="imageURL" />
    </div>
</template>

<script>
export default {
    props: {

        imageURL: {
            type: String,
            default: ""
        },
        title: String,
        color: {
            type: String,
            default: "#ffffff"
        }
    },
}
</script>

<style scoped>

#selectionViewOption{
    position: relative;
    left: 0%; 
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
    left: 40%;
    width: 20%;
    text-align: center;
    font-size:4vh;
    margin-top: 0;
    z-index: 1;
}


#selectionViewOption:hover img{
    opacity: 60%;
}

</style>