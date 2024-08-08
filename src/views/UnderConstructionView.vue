<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="under-construction">
    <h1>Under Construction</h1>
    <div class="icon">🚧</div>
    <p>We're working hard to bring you something amazing!</p>
    <p>This page is still being constructed. Please check back soon.</p>
    <RouterLink to="/" class="home-link">Return to Home</RouterLink>
  </div>
</template>

<style scoped>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #F5F5DC;
  color: #3E2C22;
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.icon {
  font-size: 5rem;
  margin: 1rem 0;
}

p {
  font-family: 'Merriweather', serif;
  max-width: 600px;
  margin: 0.5rem 0;
}

.home-link {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background-color: #8A9A5B;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #C66C45;
}
</style>