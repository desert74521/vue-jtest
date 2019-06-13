import Vue from 'vue'
import Router from 'vue-router'
import HeroesEditView from '@/views/HeroesEditView'
import HeroDetailView from '@/views/HeroDetailView'
import DashboardView from '@/views/DashboardView'
import MainView from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:MainView
    },
    {
      path:"/dashboard",
      component:DashboardView
    },
    {
      path:"/heroes",
      component:HeroesEditView
    },
    {
      path:"/detail/:id",
      component:HeroDetailView
    }
  ]
})
