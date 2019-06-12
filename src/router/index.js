import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Home.vue'
import AboutPage from '@/pages/About.vue'
import ProjectsPage from '@/pages/Projects.vue'
import ContactPage from '@/pages/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/About',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: ProjectsPage
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactPage
    },
    
    
  ]
})
