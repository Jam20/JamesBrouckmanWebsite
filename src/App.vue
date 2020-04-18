<template>
  <div id="app">
    <div id="pageView">
      <router-view/>
    </div>
    <div id="Navbar">
      <anchor-router-link class="NavbarLink"  id="HomeLink"     :to="{name: 'HomePage', hash: '#HomePage'}"        >   Home     </anchor-router-link>
      <anchor-router-link class="NavbarLink"  id="AboutLink"    :to="{name: 'AboutPage', hash: '#AboutPage'}"      >   About    </anchor-router-link>
      <anchor-router-link class="NavbarLink"  id="ProjectsLink" :to="{name: 'ProjectsPage', hash: '#ProjectsPage'}">   Projects </anchor-router-link>
      <anchor-router-link class="NavbarLink"  id="ContactLink"  :to="{name: 'ContactPage', hash: '#ContactPage'}" >   Contact  </anchor-router-link>
    </div>
    <Home     id="HomePage"    ></Home>
    <About    id="AboutPage"   ></About>
    <Projects id="ProjectsPage"></Projects>
    <Contact  id="ContactPage" ></Contact>
  </div>
</template>
<script>
import AnchorRouterLink from "vue-anchor-router-link";
import Home             from "./pages/Home"
import About            from "./pages/About"
import Projects         from "./pages/Projects"
import Contact          from "./pages/Contact"

export default {
  components: {
    AnchorRouterLink,
    Home,
    About,
    Contact,
    Projects
  },
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
  background-color: #d8d8d8; /*#3a3b3a;*/
  margin:0 !important;
  font-family: 'Titillium Web', sans-serif;
}
#pageView{
  width: 100%
}
#Navbar{
  display: flex;
  position: fixed;
  z-index: 2;
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

#HomePage{
  position: relative;
  width: 100%;
  top: 0%;
}
#AboutPage{
  position: relative;
  top: -6.4px;}

</style>
