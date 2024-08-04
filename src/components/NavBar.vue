<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">
        <RouterLink to="/">RaSa Chronicles</RouterLink>
      </div>
      <ul class="nav-links" :class="{ 'active': menuActive }">
        <li v-for="(link) in navLinks" :key="link.path"
            class="nav-item"
            :class="{ 'nav-item-active': isActiveLink(link.path)}">
          <RouterLink :to="link.path">{{ link.name }}</RouterLink>
        </li>
      </ul>
      <div class="burger" @click="toggleMenu" :class="{ 'active': menuActive }">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const menuActive = ref(false)
const navLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' }
])

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}

const toggleMenu = () => {
  menuActive.value = !menuActive.value
}
</script>

<style scoped>
.header {
  background-color: #F5F5DC; /* Light beige */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  color: #483C32; /* Warm taupe */
  text-decoration: none;
  font-weight: bold;
}

.nav-links {
  display: flex;
  padding: 0;
}

.nav-links a {
  font-family: 'Merriweather', serif;
  color: #3E2C22; /* Dark brown */
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-item {
  list-style-type: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
}

.nav-item:hover, .nav-item-active {
  background-color: #C66C45; /* Muted terracotta */
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #3E2C22; /* Dark brown */
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .nav-links {
    position: absolute;
    right: 0;
    top: 100%; /* Position it just below the header */
    background-color: #F5F5DC;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px; /* Adjust width as needed */
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
    z-index: 999;
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 0 5px;
  }

  .nav-links.active {
    transform: translateX(0%);
  }

  .nav-item {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #E5E5C5; /* Light separator */
  }

  .nav-item:last-child {
    border-bottom: none;
  }

  .nav-item a {
    display: block;
    padding: 1rem;
    color: #3E2C22;
    transition: background-color 0.3s ease;
  }

  .nav-item:hover, .nav-item-active {
    background-color: transparent;
  }

  .nav-item a:hover, .nav-item-active a {
    color: #C66C45; /* Muted terracotta */
  }

  .burger {
    display: block;
  }
}
</style>
