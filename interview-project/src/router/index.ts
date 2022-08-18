import { createRouter, createWebHistory } from 'vue-router'
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
  var number = document.getElementById('number-test');

  if (number != null) {
    // Generate a number between 0 and 100
    number.innerHTML += Math.floor(Math.random() * 100);

    // Exeption for if the element is null
  } else {
    console.log('number is null')
  };

  console.log('page is fully loaded');


};
