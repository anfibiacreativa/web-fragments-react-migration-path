<template>
  <div>
    <header>
      <div class="container">
        <NuxtLink to="/" class="back-link">← Back to Products</NuxtLink>
      </div>
    </header>

    <main class="container">
      <div v-if="loading" class="loading">
        Loading product...
      </div>
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
      <div v-else-if="product" class="product-detail">
        <div class="product-image">
          <img :src="product.imageUrl" :alt="product.name">
        </div>
        <div class="product-info">
          <h2>{{ product.name }}</h2>

          <!-- Star Rating Component -->
          <StarRating :rating="product.rating" />

          <div class="price">${{ product.price }}</div>
          <p><strong>Color:</strong> {{ product.color }}</p>
          <p><strong>Size:</strong> {{ product.size }}</p>
          <p class="description">{{ product.description }}</p>
          <button class="button" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { products } from '../../../data/product-catalog-mock';
import StarRating from '~/components/StarRating.vue';
import { CartService } from '@/shared/cartService';
const route = useRoute()
const productId = route.params.id

const product = ref<null | {
  id: number
  name: string
  imageUrl: string
  price: number
  description: string
  rating: number
  color: string
  size: string
}>(null);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(() => {
  // Find the product by ID
  const foundProduct = products.find(p => p.id === parseInt(productId as string));

  if (foundProduct) {
    product.value = foundProduct;
  } else {
    error.value = 'Product not found';
  }

  // Ensure that loading is set to false after the product is fetched
  loading.value = false;

  // Log the data to check if it's being handled correctly during SSR
  if (process.server) {
    console.log('SSR - Product Data:', product.value);
  }

  if (process.client) {
    console.log('Client-side - Product Data:', product.value);
  }
})

// Function to broadcast the product when adding to cart
const addToCart = (product: any) => {
  CartService.addToCart(product);
}
</script>

<style scoped>
.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.product-info h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
}

.product-info .description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.product-info .price {
  font-size: 2rem;
  font-weight: 700;
}

.product-info p {
  margin-block-start: 0px;
  margin-block-end: 0px;
}
</style>
