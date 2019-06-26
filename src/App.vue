<template>
  <div id="app">
    <div id="pageView">
      <router-view/>
    </div>
    <div id="Navbar">
      <router-link id="HomeLink" v-bind:class="{Hover:link1Hover, NoHover:!link1Hover}" @mouseenter.native="link1Hover=true" @mouseleave.native="link1Hover = false" to="Home">Home</router-link>
      <router-link id="AboutLink" v-bind:class="{Hover:link2Hover, NoHover:!link2Hover}" @mouseenter.native="link2Hover=true" @mouseleave.native="link2Hover = false" to="About">About</router-link>
      <div id="imgCircleBorder">
      <img id="imgCircle" src="./assets/Logo.png"/>
      </div>
      <router-link id="ProjectsLink" v-bind:class="{Hover:link3Hover, NoHover:!link3Hover}" @mouseenter.native="link3Hover=true" @mouseleave.native="link3Hover = false" to="Projects">Projects</router-link>
      <router-link id="ContactLink" v-bind:class="{Hover:link4Hover, NoHover:!link4Hover}" @mouseenter.native="link4Hover=true" @mouseleave.native="link4Hover = false" to="Contact">Contact</router-link>
    </div>
    
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

body{
  background-color: var(--BackgroundPrimary);
  margin:0 !important;
}

#Navbar{
  display: flex;
  position: absolute;
  width:100%;
}
#Navbar a{
  
  font-size: 25pt;
  text-decoration: none;
  position: relative;
  flex-grow: 1;
  text-align: center;
  height:30pt;

}

a.Hover{
  background-color: #1f4f4f;
  color: var(--ForgroundNeutral);
}
a.NoHover{
  color: var(--ForgroundPrimary);
  background-color: var(--BackgroundPrimary);
}

#imgCircle{
  height: 100px;
  border-radius: 50%;
  margin: 25px;
  margin-top: .1%;
  vertical-align:middle;
  position: relative;
  left: 0%;

}

#imgCircleBorder{
  height: 5%;
  background-color: var(--BackgroundPrimary);
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}

#pageView{
  width: 100%;
}


</style>
