<template>
  <div class="slogan-generator">
    <div class="ribbon">NEW!</div>

    <h2>Create your own shirt!</h2>
    <p class="subtext">Enter a tech term to get an AI-generated slogan!</p>

    <div class="input-group">
      <input
        v-model="keyword"
        class="input"
        placeholder="e.g. Docker"
      />
      <button @click="generate" class="button">Generate</button>
    </div>

    <div v-if="slogan" class="slogan-box">
      <p class="slogan-text">“{{ slogan }}”</p>
      <div class="slogan-actions">
        <button @click="addToCart" class="button success">Add to Cart</button>
        <button @click="generate" class="button secondary">Regenerate</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '../types/types';
import { CartService } from '@/shared/cartService';

const keyword = ref('');
const slogan = ref('');

const generate = async () => {
  if (!keyword.value) return;

  const { data, error } = await useFetch<{ slogan: string }>('/generate', {
    baseURL: 'http://localhost:3001',
    method: 'POST',
    body: { keyword: keyword.value }
  });

  if (error.value) {
    console.error(error.value);
    slogan.value = 'Error generating slogan';
  } else {
    slogan.value = data.value?.slogan ?? '';
  }
};

const addToCart = () => {
  const product: Product = {
    id: Math.floor(Math.random() * 10000),
    name: `Custom Slogan: ${keyword.value}`,
    description: slogan.value,
    price: 29.99,
    color: '',
    size: '',
    imageUrl: '/slogan-image.jpg',
    rating: 5
  };

  CartService.addToCart(product);
};
</script>

<style scoped>
.slogan-generator {
  position: relative;
  background: linear-gradient(to right, #2c003e, #4d005a);
  color: white;
  border-radius: 12px;
  padding: 24px;
  margin: 32px auto;
  max-width: 900px;
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.3);
}

.ribbon {
  position: absolute;
  top: 0;
  left: 0;
  background: #ff1493;
  color: white;
  font-weight: bold;
  padding: 6px 14px;
  font-size: 14px;
  border-bottom-right-radius: 12px;
}

h2 {
  font-size: 24px;
  margin-bottom: 6px;
  color: #ffb3ec;
}

.subtext {
  font-size: 16px;
  color: #ffe6f2;
  margin-bottom: 16px;
}

.input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.input {
  flex-grow: 1;
  padding: 10px 12px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  outline: none;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
}

.button {
  background-color: #ff1493;
  color: white;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #e60073;
}

.button.success {
  background-color: #00cc88;
}

.button.success:hover {
  background-color: #00a66b;
}

.button.secondary {
  background-color: #444;
}

.button.secondary:hover {
  background-color: #666;
}

.slogan-box {
  margin-top: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}

.slogan-text {
  font-size: 18px;
  font-style: italic;
  margin-bottom: 12px;
  color: #ffffff;
}

.slogan-actions {
  display: flex;
  gap: 12px;
}
</style>
