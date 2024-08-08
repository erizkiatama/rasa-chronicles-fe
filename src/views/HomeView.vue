<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  couples: {
    type: Array
  }
})

const collections = ref([
  {
    title: 'Books',
    description: 'Our favorite reads and literary adventures.',
    icon: 'fas fa-book',
    color: '#8A9A5B'
  },
  {
    title: 'Movies',
    description: 'Films that have captured our hearts.',
    icon: 'fas fa-film',
    color: '#C66C45'
  },
  {
    title: 'Games',
    description: 'The games we love to play together.',
    icon: 'fas fa-gamepad',
    color: '#483C32'
  }
])

// const photos = ref([
//   { url: 'src/assets/images/testing.jpg', description: 'Our trip to the mountains' },
//   { url: 'src/assets/images/testing.jpg', description: 'Cozy evening at home' },
//   { url: 'src/assets/images/testing.jpg', description: 'Beach sunset' },
//   { url: 'src/assets/images/testing.jpg', description: 'City exploration' },
//   { url: 'src/assets/images/testing.jpg', description: 'Picnic in the park' },
//   { url: 'src/assets/images/testing.jpg', description: 'Winter wonderland' }
// ])

const scrollToContent = () => {
  // Implement smooth scrolling to the next section
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}

</script>

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
      <p class="intro-text">We're Ezra & Salsa, a couple sharing our journey through life, love, and shared passions.
        Here, we share our life together, from the books we read to the places we explore. This is a
        digital scrapbook of our adventures, collections, and everyday moments. Join us as we document our shared
        experiences and the little things that make our relationship special.</p>
      <div class="decorative-line"></div>
    </div>
  </section>
  <!--  End of Intro Section-->

  <!--  Start of Featured Collection Section-->
  <section class="featured-collections">
    <div class="container">
      <h2 class="section-title">Our Collections</h2>
      <div class="collections-grid">
        <div v-for="collection in collections" :key="collection.title" class="collection-item">
          <div class="collection-icon" :style="{ backgroundColor: collection.color }">
            <i :class="collection.icon"></i>
          </div>
          <h3 class="collection-title">{{ collection.title }}</h3>
          <p class="collection-description">{{ collection.description }}</p>
          <RouterLink class="view-button" to="/collection">
            View Collection
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  <!--  End of Featured Collection Section-->

  <!-- TODO: Implement this later when the API is ready -->
  <!--  Start of Gallery Preview Section-->
  <!--  <section class="gallery-preview">-->
  <!--    <div class="container">-->
  <!--      <h2 class="section-title">Our Moments</h2>-->
  <!--      <div class="gallery-grid">-->
  <!--        <div v-for="(photo, index) in photos" :key="index" class="gallery-item">-->
  <!--          <img :src="photo.url" :alt="photo.description" class="gallery-image" />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <RouterLink class="view-more-button" to="/gallery">View Full Gallery</RouterLink>-->
  <!--    </div>-->
  <!--  </section>-->
  <!--  End of Gallery Preview Section-->

  <!--  Start of About Us Snippet Section-->
  <section class="about-us-snippet">
    <div class="container">
      <h2 class="section-title">About Us</h2>
      <div class="couple-info">
        <div class="person" v-for="person in couples" :key="person.name">
          <div class="person-image">
            <img :src="person.photo" :alt="person.nickname" />
          </div>
          <h3 class="person-name">{{ person.nickname }}</h3>
          <p class="person-bio">{{ person.shortBio }}</p>
        </div>
      </div>
      <RouterLink class="read-more-button" to="/about-us">Read Our Full Story</RouterLink>
    </div>
  </section>
  <!--  End of About Us Snippet Section-->
</template>

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
  background-image: url("../assets/images/welcome-image.jpeg");
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
  margin: 0 auto;
  max-width: 800px;
}

.decorative-line {
  height: 2px;
  background-color: #C66C45; /* Muted terracotta */
  width: 50px;
  margin: 1rem auto;
}

.featured-collections {
  background-color: #F5F5DC;
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #483C32;
  text-align: center;
  margin-bottom: 2rem;
}

.collections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.collection-item {
  background-color: #FFF;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.collection-item:hover {
  transform: translateY(-5px);
}

.collection-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1rem;
}

.collection-icon i {
  font-size: 2rem;
  color: #FFF;
}

.collection-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: #483C32;
  margin-bottom: 0.5rem;
}

.collection-description {
  font-family: 'Merriweather', serif;
  font-size: 0.9rem;
  color: #3E2C22;
  margin-bottom: 1rem;
}

.view-button {
  background-color: #8A9A5B;
  color: #FFF;
  border: none;
  padding: 0.5rem 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.view-button:hover {
  background-color: #7A8A4B;
}

.gallery-preview {
  background-color: #F5F5DC;
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #483C32;
  text-align: center;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.gallery-item {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.view-more-button {
  display: block;
  width: 200px;
  margin: 0 auto;
  background-color: #C66C45;
  color: #FFF;
  border: none;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.view-more-button:hover {
  background-color: #A55634;
}

.about-us-snippet {
  background-color: #F5F5DC;
  padding: 4rem 1rem;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #483C32;
  margin-bottom: 2rem;
}

.couple-info {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 2rem;
}

.person {
  flex: 1;
  max-width: 300px;
}

.person-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 3px solid #C66C45;
}

.person-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: #483C32;
  margin-bottom: 0.5rem;
}

.person-bio {
  font-family: 'Merriweather', serif;
  font-size: 0.9rem;
  color: #3E2C22;
  line-height: 1.6;
}

.read-more-button {
  background-color: #8A9A5B;
  color: #FFF;
  border: none;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.read-more-button:hover {
  background-color: #7A8A4B;
}

.pulse-loader {
  text-align: center;
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

  .featured-collections {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .collections-grid {
    grid-template-columns: 1fr;
  }

  .gallery-preview {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-us-snippet {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .couple-info {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .person {
    max-width: 100%;
  }
}
</style>