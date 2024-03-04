<template>
    <div>
        <input v-model="testVar" type="checkbox">
        <p>{{ testVar }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showText = ref(false)

const testVar = ref('')

</script>