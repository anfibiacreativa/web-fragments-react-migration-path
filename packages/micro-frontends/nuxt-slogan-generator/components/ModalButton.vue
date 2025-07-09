<template>
  <div class="button-container">
    <button @click="openModal" class="generate-button">
      Generate your slogan!
    </button>

    <ModalWrapper :isOpen="isModalOpen" @close="closeModal">
      <SloganGenerator />
    </ModalWrapper>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.generate-button {
  background: linear-gradient(to right, #ff1493, #fa3dbd);
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 10px rgba(255, 20, 147, 0.3);
  position: relative;
  z-index: 1;
  width: 250px;
}

.generate-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 20, 147, 0.4);
}

.generate-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(255, 20, 147, 0.3);
}
</style>
