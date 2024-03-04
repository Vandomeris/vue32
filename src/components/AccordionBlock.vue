<template>
    <CollapseItem v-for="item in data" :key="item.id" :title="item.title" :text="item.body" />
</template>

<script setup>

import CollapseItem from './CollapseItem.vue';

defineProps({
    data: Array
})
</script>