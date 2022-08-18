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
  // Grab the element to menipulate, then Generate a number between 0 and 100
  var number = document.getElementById('number-test');
  var getRandomNumber = Math.floor(Math.random() * 100);

  if (number != null) {
    // Set the HTML element content as the generated number
    number.innerHTML += getRandomNumber;

    // Exeption for if the element is null
  } else {
    console.log('number is null')
  };

  console.log('page is fully loaded');


};
