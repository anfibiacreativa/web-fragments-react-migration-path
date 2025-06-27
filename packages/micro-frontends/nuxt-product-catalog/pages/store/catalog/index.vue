<template>
  <div>
    <header></header>

    <main class="container">
      <div v-if="pending" class="loading">Loading products...</div>
      <div v-else-if="error" class="error">{{ error.message }}</div>
      <div v-else class="products">
        <div class="grid">
          <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @click="navigateToProduct(product.id)"
        />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app';
import { products as mockProducts } from '../../../data/product-catalog-mock';

const { data: products, pending, error } = await useAsyncData('products', async () => {
  try {
    if (process.server) {
      console.log('SSR Products Data:', mockProducts);
    }
    return mockProducts;
  } catch (err) {
    console.error('Failed to fetch products:', err);
    throw new Error('Failed to fetch products');
  }
});

const router = useRouter();
const navigateToProduct = (id: number) => {
  router.push(`/store/product/${id}`);
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 512px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
