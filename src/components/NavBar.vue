<script setup>
  import { RouterLink, useRoute } from "vue-router"

  const isActiveLink = (routePath) => {
    const route = useRoute()
    return route.path === routePath
  }
</script>

<template>
  <header class="header">
    <div class="navbar">
      <h2 class="logo">RaSa Chronicles</h2>
      <nav class="nav">
        <ul class="nav-list">
          <li :class="[isActiveLink('/') ? 'nav-item nav-item-active' : 'nav-item']">
            <RouterLink to="/">
              Home
            </RouterLink>
          </li>
          <li :class="[isActiveLink('/about-us') ? 'nav-item nav-item-active' : 'nav-item']">
            <RouterLink to="/about-us">
              About Us
            </RouterLink
            ></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  color: white;
  background-color: saddlebrown;
  height: 60px;
  font-size: 1.1rem;
}

.navbar {
  height: 100%;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.nav-list {
  display: flex;
  padding: 0;
}

.nav-item {
  list-style-type: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
}

.nav-item-active {
  background-color: rgba(244, 164, 96, 0.6);
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item:hover {
  background-color: sandybrown;
}

</style>
