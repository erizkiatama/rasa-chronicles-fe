<template>
  <footer class="footer">
    <div class="social-links-container">
      <div class="partner-links">
        <h4>{{ hisName }}</h4>
        <div class="social-icons">
          <a v-for="(link, index) in hisLinks" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
      <div class="partner-links">
        <h4>{{ herName }}</h4>
        <div class="social-icons">
          <a v-for="(link, index) in herLinks" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </div>
    <p class="copyright">&copy; {{ currentYear() }} {{ hisName }} & {{ herName }}. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const hisName = ref('Ezra')
const herName = ref('Salsa')

const hisLinks = ref([
  { icon: 'fab fa-instagram', url: 'https://instagram.com/ezrarizkiatama' },
  { icon: 'fab fa-facebook', url: 'https://facebook.com/erizkiatama' },
  { icon: 'fab fa-twitter', url: 'https://twitter.com/ezrarizkiatama' }
])
const herLinks = ref([
  { icon: 'fab fa-instagram', url: 'https://instagram.com/hefasalsabila' },
  { icon: 'fab fa-facebook', url: 'https://facebook.com/hefa.salsabila' },
  { icon: 'fab fa-twitter', url: 'https://twitter.com/hefasalsabila' }
])

const currentYear = () => {
  return new Date().getFullYear()
}
</script>

<style scoped>
.footer {
  background-color: #F5F5DC;
  color: #3E2C22;
  padding: 20px;
  text-align: center;
}

.social-links-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
}

.partner-links h4 {
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
}

.social-icons a {
  color: #3E2C22;
  font-size: 24px;
  margin: 0 10px;
  text-decoration: none;
}

.copyright {
  margin: 10px 0;
}

@media (max-width: 600px) {
  .social-links-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>