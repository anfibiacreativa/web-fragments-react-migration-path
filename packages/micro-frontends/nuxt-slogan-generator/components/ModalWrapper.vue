<template>
  <div>
    <!-- Modal Overlay -->
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-content" ref="modalRef">
        <button class="modal-close" @click="close">
          ✕
        </button>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const modalRef = ref(null);

const close = () => {
  emit('close');
};

// Close modal when clicking outside
const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    close();
  }
};

// Close modal with ESC key
const handleEsc = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    close();
  }
};

// Control body scroll
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
  } else {
    document.body.style.overflow = ''; // Re-enable scrolling
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEsc);
  }
}, { immediate: true });

// Clean up event listeners
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.removeEventListener('keydown', handleEsc);
});
</script>

<style scoped>
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
