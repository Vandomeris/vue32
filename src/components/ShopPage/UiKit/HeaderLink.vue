<template>
    <a class=" hover:underline underline-offset-4" :href="link">{{ text }}</a>
</template>

<script setup>
defineProps({
    link: String,
    text: String
})
</script>