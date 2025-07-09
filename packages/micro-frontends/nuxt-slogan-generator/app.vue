<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Make generator component available as entry point for the web fragment, but only when explicitly requested -->
    <div v-if="showSlogan" class="slogan-container">
      <SloganGenerator />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SloganGenerator from './components/SloganGenerator.vue';

// By default, don't show the standalone slogan generator
const showSlogan = ref(false);

onMounted(() => {
  // Only show the slogan generator when explicitly requested by fragmentType=generator
  const urlParams = new URLSearchParams(window.location.search);
  const fragmentType = urlParams.get('fragmentType');
  
  if (fragmentType === 'generator') {
    showSlogan.value = true;
  }
});
</script>

<style>
/* Global styles */
body {
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
  padding: 0;
}

.slogan-container, .modal-container {
  width: 100%;
}
</style>
