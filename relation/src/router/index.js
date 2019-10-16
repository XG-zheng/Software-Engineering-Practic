import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import InputPage from '@/components/inputData'
import Info from '@/components/info'
import Relation from '@/components/relation'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: user,
      children:[
        {path:'info',component:Info},
        {path:'relation',component:Relation}
      ]
    },
    {
      path: '/',
      name: 'data',
      component: InputPage
      
    }
  ]
})
