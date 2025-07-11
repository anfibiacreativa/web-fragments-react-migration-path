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
      <p class="slogan-text">"{{ slogan }}"</p>
      
      <div class="options-container">
        <div class="option-group">
          <h3>Size</h3>
          <div class="custom-radio-group">
            <label class="custom-radio">
              <input type="radio" v-model="selectedSize" value="S" />
              <span class="radio-label">S</span>
            </label>
            <label class="custom-radio">
              <input type="radio" v-model="selectedSize" value="M" />
              <span class="radio-label">M</span>
            </label>
            <label class="custom-radio">
              <input type="radio" v-model="selectedSize" value="L" />
              <span class="radio-label">L</span>
            </label>
          </div>
        </div>
        
        <div class="option-group">
          <h3>Color</h3>
          <div class="custom-radio-group">
            <label class="custom-radio color-radio">
              <input type="radio" v-model="selectedColor" value="black" />
              <span class="color-swatch black"></span>
              <span class="radio-label">Black</span>
            </label>
            <label class="custom-radio color-radio">
              <input type="radio" v-model="selectedColor" value="white" />
              <span class="color-swatch white"></span>
              <span class="radio-label">White</span>
            </label>
          </div>
        </div>
      </div>
      
      <div class="slogan-actions">
        <button 
          @click="addToCart" 
          class="button success" 
          :disabled="addedToCart"
          :class="{ 'disabled': addedToCart }"
        >
          {{ addedToCart ? 'Added to Cart' : 'Add to Cart' }}
        </button>
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
const selectedSize = ref('M');
const selectedColor = ref('black');
const addedToCart = ref(false);

const generate = async () => {
  if (!keyword.value) return;
  
  // Reset the addedToCart status when generating a new slogan
  addedToCart.value = false;

  // Use environment variable with fallback to localhost
  const apiBaseUrl = import.meta.env.VITE_AI_SERVICE_URL || 'http://localhost:3001';
  console.log('AI Service URL:', apiBaseUrl);

  const { data, error } = await useFetch<{ slogan: string }>('/generate', {
    baseURL: apiBaseUrl,
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
    color: selectedColor.value,
    size: selectedSize.value,
    imageUrl: '/_fragment/nuxt/assets/images/product14.webp',
    rating: 5
  };

  CartService.addToCart(product);
  addedToCart.value = true;
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

h3 {
  font-size: 18px;
  color: #ffb3ec;
  margin-bottom: 10px;
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

.button.success:hover:not(.disabled) {
  background-color: #00a66b;
}

.button.secondary {
  background-color: #444;
}

.button.secondary:hover {
  background-color: #666;
}

.button.disabled {
  background-color: #88d8b9;
  cursor: not-allowed;
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
  margin-bottom: 20px;
  color: #ffffff;
}

.slogan-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

/* Custom radio button styles */
.options-container {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.option-group {
  flex: 1;
}

.custom-radio-group {
  display: flex;
  gap: 12px;
}

.custom-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-label {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 15px;
  border-radius: 6px;
  transition: all 0.3s;
  text-align: center;
  min-width: 40px;
}

.custom-radio input:checked + .radio-label {
  background-color: #ff1493;
  color: white;
}

/* Color radio buttons */
.color-radio {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-swatch {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-bottom: 5px;
  border: 3px solid transparent;
  transition: all 0.3s;
}

.color-swatch.black {
  background-color: #000;
}

.color-swatch.white {
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
}

.color-radio input:checked + .color-swatch {
  border-color: #ff1493;
}

@media screen and (max-width: 756px) {
  .slogan-generator {
    padding: 16px;
    margin: 16px auto;
  }

  .input-group,
  .slogan-actions {
    flex-direction: column;
  }

  .input {
    margin-bottom: 8px;
  }

  .options-container {
    flex-direction: column;
    gap: 20px;
  }

  .option-group {
    width: 100%;
  }
  
}
</style>
