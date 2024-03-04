<template>
    <div>
        <h3 class="w-full shadow-md">
            <button class="w-full bg-slate-300 text-left py-2 px-4 flex justify-between"
                @click="showCollapse = !showCollapse">
                <span>{{ title }}</span>
                <span v-if="!showCollapse">+</span>
                <span v-else>-</span>
            </button>
        </h3>
        <p class="py-2 px-4" v-show="showCollapse">{{ text }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    title: String,
    text: String
})

const showCollapse = ref(false)

</script>
