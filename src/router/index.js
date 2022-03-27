import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import List from '../views/List.vue'
import Join from '../views/Join.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/list/:id',
    name : 'userImageList',
    component :  List,

  },
  {
    path : '/join',
    name : 'Join',
    component : Join,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach( () => {
//   console.log(store.state.isAuth);
// });


export default router


