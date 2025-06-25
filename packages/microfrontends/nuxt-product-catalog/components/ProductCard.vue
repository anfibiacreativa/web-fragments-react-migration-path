<template>
  <div class="product-card" @click="$emit('click')">
    <img :src="product.imageUrl" :alt="product.name" />
    <div class="content">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>

      <!-- Star Rating Component -->
      <StarRating :rating="product.rating" />

      <div class="footer">
        <span class="price">${{ product.price }}</span>
        <button class="button" @click.stop="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Product } from '@/types/types';
import StarRating from './StarRating.vue';
import { CartService } from '@/shared/cartService';

defineProps<{ product: Product }>()

const addToCart = (product: Product) => {
  CartService.addToCart(product);
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s;
  cursor: pointer;
}
</style>
