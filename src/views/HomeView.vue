<template>
  <!--  Start of Hero Section -->
  <section class="hero-section">
    <div class="hero-image">
      <div class="overlay"></div>
      <h1 class="hero-title">Our Journey Together</h1>
      <button class="explore-button" @click="scrollToContent">
        Explore Our Story
      </button>
    </div>
  </section>
  <!--  End of Hero Section -->

  <!--  Start of Intro Section-->
  <section class="intro-section">
    <div class="container">
      <div class="decorative-line"></div>
      <h2 class="intro-title">Welcome to Our Journey</h2>
      <p class="intro-text">Here, we share our life together, from the books we read to the places we explore. This is a
        digital scrapbook of our adventures, collections, and everyday moments. Join us as we document our shared
        experiences and the little things that make our relationship special.</p>
      <div class="decorative-line"></div>
      <RouterLink to="/about-us" class="cta-button">Learn More About Us</RouterLink>
    </div>
  </section>
  <!--  End of Intro Section-->

  <!--  Start of Featured Collection Section-->
  <section id="featured-collections">
    <h2>Featured Collections</h2>
    <div class="collection-container">
      <div class="collection" v-for="collection in collections" :key="collection.id">
        <img :src="collection.image" :alt="collection.title">
        <h3>{{ collection.title }}</h3>
        <p>{{ collection.description }}</p>
        <a :href="collection.link" class="btn">Explore</a>
      </div>
    </div>
  </section>
  <!--  End of Featured Collection Section-->
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const collections = ref([
  {
    id: 1,
    title: 'Books',
    image: 'src//assets/testing.jpg',
    description: 'A glimpse into our literary world.',
    link: 'books.html'
  }
  // ... other collections
])

const scrollToContent = () => {
  // Implement smooth scrolling to the next section
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}

</script>

<style scoped>
.hero-section {
  height: 70vh;
  position: relative;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  background-image: url("../assets/welcome-image.jpeg");
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5)
  );
  pointer-events: none;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  z-index: 1;
  font-family: 'Montserrat', sans-serif;
}

.explore-button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  font-family: 'Merriweather', serif;
}

.explore-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.intro-section {
  background-color: #F5F5DC; /* Light beige background */
  padding: 4rem 1rem;
  background-image: radial-gradient(#8A9A5B 1px, transparent 1px),
  radial-gradient(#8A9A5B 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(245, 245, 220, 0.8); /* Semi-transparent light beige */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #483C32; /* Warm taupe */
  margin-bottom: 1rem;
}

.intro-text {
  font-family: 'Merriweather', serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #3E2C22; /* Dark brown */
  margin-bottom: 1rem;
}

.decorative-line {
  height: 2px;
  background-color: #C66C45; /* Muted terracotta */
  width: 50px;
  margin: 1rem auto;
}

.cta-button {
  background-color: #8A9A5B; /* Soft sage green */
  color: white;
  border: none;
  padding: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  margin-top: 1rem;
  text-decoration: none;
}

.cta-button:hover {
  background-color: #7A8A4B; /* Darker shade of soft sage green */
}

#featured-collections {
  text-align: center;
  margin: 40px 0;
}

.collection-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.collection {
  text-align: center;
  margin: 20px;
  background-color: #F5F5DC; /* Light beige */
  border-radius: 10px;
  padding: 20px;
}

.collection img {
  max-width: 100px;
  border-radius: 50%;
}

.collection h3 {
  color: #3E2C22; /* Dark brown */
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  margin: 10px 0;
}

.collection p {
  color: #483C32; /* Warm taupe */
  font-family: Merriweather, serif;
  font-size: 14px;
  margin: 0;
}

.btn {
  background-color: #C66C45; /* Muted terracotta */
  color: #F5F5DC; /* Light beige */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .intro-section {
    padding: 3rem 1rem;
  }

  .intro-title {
    font-size: 1.75rem;
  }

  .intro-text {
    font-size: 0.9rem;
  }
}
</style>