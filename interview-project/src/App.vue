<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="clix logo" class="logo" src="@/assets/logo.png" />

  </header>
  <main>
    
    <RouterView />
  </main>


</template>

<style scoped>
header {
  min-height: 25vh;
}

.logo {
  display: block;
  margin: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
