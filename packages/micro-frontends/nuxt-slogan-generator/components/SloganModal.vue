<template>
  <div>
    
    <!-- Modal Overlay -->
    <Teleport to="body">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">✕</button>
          <div class="modal-body">
            <SloganGenerator />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // Re-enable scrolling
};

// Handle ESC key to close modal
const handleEsc = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isModalOpen.value) {
    closeModal();
  }
};

// Add and remove event listeners
onMounted(() => {
  document.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc);
});
</script>

<style scoped>
.generate-button {
  background: linear-gradient(to right, #ff1493, #fa3dbd);
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  margin: 20px auto;
  display: block;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
}

.modal-content {
  background: linear-gradient(to right, #2c003e, #4d005a);
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s;
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.modal-body {
  padding: 20px;
}
</style>
