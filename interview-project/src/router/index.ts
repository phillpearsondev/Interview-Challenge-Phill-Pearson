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

// grab the button element
var PushButton = document.getElementById('push-button-actual');

if (PushButton != null) {
  PushButton.addEventListener("click", myFunction);
}
else {
  console.log('Push Button is null')
}


function myFunction() {
  console.log('Hello World!');
}