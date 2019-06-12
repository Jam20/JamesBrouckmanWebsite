<template>
  <div id="app">
    <div id="Navbar">
      <router-link to="Home">Home</router-link>
      <router-link to="About">About</router-link>
      <router-link to="Projects">Projects</router-link>
      <router-link to="Contact">Contact</router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#Navbar{
  background-color: red
}
#Navbar router-link{
  background-color: black
}
</style>
