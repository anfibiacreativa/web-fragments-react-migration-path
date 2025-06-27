<template>
  <div class="stars">
    <span
      v-for="star in stars"
      :key="star"
      class="star"
      :class="{ filled: star <= rating }"
    >
      ★
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  rating: {
    type: Number,
    required: true,
    default: 0,  // Default rating to 0 if not provided
  },
});

const stars = computed(() => [1, 2, 3, 4, 5]);
</script>

<style scoped>
.stars {
  color: #ddd;
  font-size: 1rem;
}

.star {
  cursor: default;
}

.star.filled {
  color: #ffd700;
}
</style>
