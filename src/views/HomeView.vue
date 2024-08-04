<template>
  <section class="hero-section">
    <div class="hero-image">
      <div class="overlay"></div>
      <h1 class="hero-title">Our Journey Together</h1>
      <button class="explore-button" @click="scrollToContent">
        Explore Our Story
      </button>
    </div>
  </section>
  <section class="intro-section">
    <div class="container">
      <h2 class="intro-title">Welcome to Our Journey</h2>
      <p class="intro-text">Here, we share our life together, from the books we read to the places we explore. This is a
        digital scrapbook of our adventures, collections, and everyday moments. Join us as we document our shared
        experiences and the little things that make our relationship special.</p>
    </div>
  </section>
</template>

<script setup>

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
  background-image: url("../assets/testing.jpg");
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
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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