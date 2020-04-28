<template>
    <div id="SelectionOption">
        <img :src="imageURL"/>
        <div class="arrow arrow-left" @mouseenter="emitEvent('backBtnEnter')" @mouseleave="emitEvent('backBtnLeave')" @click="emitEvent('backBtnClick')"/>
    </div>
</template>

<script>
export default {
    
    props:{
        imageURL: {
            type: String,
            default: ""
        },
    },

    methods:{
        emitEvent: function(eventName){
            this.$emit(eventName)
        }
    }

}
</script>

<style scoped>

#SelectionOption img{
    position: relative;
    top: 0%;
    left: 0%;
    opacity: 100%;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    zoom: 1;
    z-index: 0;
    filter: contrast(80%);
}

.arrow {
    position: absolute;
    top: 0%;
    left: 0%;
    padding: 1.1vh;
    box-shadow: 1px -1px 0 1px rgba(255, 255, 255, 0.5) inset;
    -webkit-box-shadow: 2px -2px rgba(255, 255, 255, 0.5) inset;
    border: solid transparent;
    border-width: 0 0 2rem 2rem;
    transition: 0.3s;
    transform:rotate(45deg) 
}

.arrow:hover {
          box-shadow: 2px -2px 0 2px white inset;
  -webkit-box-shadow: 4px -4px white inset;
}

</style>