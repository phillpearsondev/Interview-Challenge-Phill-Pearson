import { createRouter, createWebHistory } from 'vue-router'
import { randomNumberGenerator } from '@/assets/scripts/randomNumberGenerator'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router


window.onload = (event) => {

  randomNumberGenerator()

  console.log('page is fully loaded');


};
