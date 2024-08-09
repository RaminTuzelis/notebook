<template>
  <div>
    <h1>Backend Response:</h1>
    <p>{{ backendResponse }}</p>
  </div>
<news-letter/>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const backendResponse = ref('');

// Funkcija užklausai į backend
const fetchBackendResponse = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3001/');
    const text = await response.text();
    backendResponse.value = text.trim();
  } catch (error) {
    console.error('Error from back end:', error);
    backendResponse.value = 'Not successfully fetched from backend';
  }
};

onMounted(() => {
  fetchBackendResponse();
});
</script>

<style scoped>

</style>
