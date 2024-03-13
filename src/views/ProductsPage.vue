<template>
    <div class="grid grid-cols-12 gap-10">

        <div class="col-span-3" v-for="product in products.products" :key="product.id">
            <img :src="product.images[0]" alt="">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
            <p>{{ product.id }}</p>
            <button @click="addToCart(product)" class="py-2 px-4 bg-slate-500 text-white mt-4">Купить</button>
        </div>



    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
import { onMounted, ref } from 'vue';

const cartStore = useCartStore()

const products = ref([])

async function getProducts() {
    const resp = await fetch('https://dummyjson.com/products')
    products.value = await resp.json()
}

onMounted(async () => {
    await getProducts()
})

function addToCart(product) {
    cartStore.cart.push(product)
    console.log(cartStore.cart);
}
</script>