<template>
    Это страница продукта с ID - {{ $route.params.id }}
    <div v-if="product" class="flex gap-x-20 justify-center">
        <div>
            <img class="w-full" :src="product?.images[0]" alt="">
        </div>

        <div>
            <h2>{{ product?.title }}</h2>
            <p>{{ product?.description }}</p>
            <p>{{ product?.price }}$</p>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';


const product = ref()
const route = useRoute()

async function getProduct(prodId) {
    const resp = await fetch(`https://dummyjson.com/products/${prodId}`)
    product.value = await resp.json()
    console.log(product.value);
}

onBeforeMount(() => {
    getProduct(route.params.id)
})

</script>