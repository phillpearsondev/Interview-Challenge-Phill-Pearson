import { createRouter, createWebHistory } from 'vue-router'
import { randomNumberGenerator } from '@/assets/scripts/randomNumberGenerator'
import { setClickEventToButton } from '@/assets/scripts/openTheDoor'
import HomeView from '../views/HomeView.vue'
import establishWebSocket from '@/assets/scripts/websocket'

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

  setClickEventToButton();
  randomNumberGenerator();
  establishWebSocket();

  console.log('page is fully loaded');

};