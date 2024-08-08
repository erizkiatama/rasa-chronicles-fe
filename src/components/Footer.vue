<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

defineProps({
  couples: {
    type: Array
  },
  isLoading: {
    type: Boolean,
    default: true
  }
})

const currentYear = () => {
  return new Date().getFullYear()
}
</script>

<template>
  <div class="pulse-loader" v-if="isLoading">
    <PulseLoader color="#3E2C22" />
  </div>
  <footer class="footer" v-else>
    <div class="social-links-container">
      <div class="partner-links" v-for="person in couples" :key="person.id">
        <h4>{{ person.nickname }}</h4>
        <div class="social-icons">
          <a :href="person.instagramLink" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
          <a :href="person.facebookLink" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
          </a>
          <a :href="person.twitterLink" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    <p class="copyright">&copy; {{ currentYear() }} {{ couples.at(0).nickname }} & {{ couples.at(1).nickname }}.
      All rights reserved.</p>
  </footer>
</template>

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