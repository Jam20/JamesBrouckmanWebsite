<template>
  <div id="app">
    <div id="Navbar">
      <router-link v-bind:class="{Hover:link1Hover}" @mouseenter.native="link1Hover=true" @mouseleave.native="link1Hover = false" to="Home">Home</router-link>
      <router-link v-bind:class="{Hover:link2Hover}" @mouseenter.native="link2Hover=true" @mouseleave.native="link2Hover = false" to="About">About</router-link>
      <router-link v-bind:class="{Hover:link3Hover}" @mouseenter.native="link3Hover=true" @mouseleave.native="link3Hover = false" to="Projects">Projects</router-link>
      <router-link v-bind:class="{Hover:link4Hover}" @mouseenter.native="link4Hover=true" @mouseleave.native="link4Hover = false" to="Contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      link1Hover: false,
      link2Hover: false,
      link3Hover: false,
      link4Hover: false,

    }
  }
 
}

</script>

<style>
@import url("Variables.css");

#app{
  background-color: var(--BackgroundPrimary);
}

#Navbar a{
  color: var(--BackgroundAccent);
  font-size: 25pt;
  text-decoration: none;
  margin: 20px;
}

a.Hover{
  background-color: #4f4f4f;
}

</style>
