<script setup lang="ts">
import type { Product } from "@/model/products";

const pages =defineProps<{
    products: Product
}>();
}
</script>

<template>
    
        <div class="card" >
            <div class="card-image">
                <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div class="card-content">
                <p class="price">${{ product.price }}</p>
                <h3>{{ product.title }}</h3>
                <i>{{ product.brand }}</i>
                <p>{{ product.description }}</p>
                <button @click="addToCart(product)" class="button is-primary">Add to Cart</button>
            </div>
        </div>
    
</template>
