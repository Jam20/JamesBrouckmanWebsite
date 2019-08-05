<template>
  <div id="app">
    <div id="pageView">
      <router-view/>
    </div>
    <div id="Navbar">
      <router-link class="NavbarLink"  id="HomeLink"     to="Home">    Home    </router-link>
      <router-link class="NavbarLink"  id="AboutLink"    to="About">   About   </router-link>
      <router-link class="NavbarLink"  id="ProjectsLink" to="Projects">Projects</router-link>
      <router-link class="NavbarLink"  id="ContactLink"  to="Contact"> Contact </router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  }
 
}

</script>

<style>
@import url("Variables.css");

body{
  background-color: var(--BackgroundPrimary);
  margin:0 !important;
  font-family: 'Titillium Web', sans-serif;
}
#pageView{
  width: 100%
}

#Navbar{
  display: flex;
  position: absolute;
  width:100%;
}
#Navbar a{
  font-size: 1.75vw;
  text-decoration: none;
  position: relative;
  flex-grow: 1;
  text-align: center;
  color: white;

}


#Navbar a::after{
  content: '';
  position: absolute;
  width: 25%;
  height:2px;
  bottom: 0;
  left: 37.5%;
  background-color: white;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

#Navbar a:hover::after{
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}


</style>
