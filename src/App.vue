<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const couples = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await axios.get('/api/v1/user')
    couples.value = response.data.users
  } catch (error) {
    console.log('Error fetching data', error)
  } finally {
    isLoading.value =  false
    console.log(import.meta.env)
  }
})
</script>

<template>
  <Header />
  <RouterView :couples="couples" />
  <Footer :couples="couples" :isLoading="isLoading" />
</template>