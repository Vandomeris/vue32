<template>
    <h2>Счетчик с использованием Composition API</h2>
    <div>Счетчик: {{ count }}</div>
    <button @click="increment">+++</button>
    <button @click="decrement">---</button>
</template>

<script setup >
import { ref } from 'vue';


const count = ref(10)

function increment() {
    if (count.value < 20)
        count.value++
}

function decrement() {
    if (count.value > 0)
        count.value--
}
</script>