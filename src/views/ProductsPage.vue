<template>
    <div class="grid grid-cols-12 gap-10">

        <RouterLink :to="`/product/${product.id}`" class="col-span-3" v-for="product in products.products"
            :key="product.id">
            <img :src="product.images[0]" alt="">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
            <p>{{ product.id }}</p>
        </RouterLink>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';


const products = ref([])

async function getProducts() {
    const resp = await fetch('https://dummyjson.com/products')
    products.value = await resp.json()
}

onMounted(async () => {
    await getProducts()
})

</script>