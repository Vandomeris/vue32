<template>
    <form @submit.prevent="$emit('mishaIArsen', newUser)" class="w-1/3 mx-auto">
        <h1 class="font-bold text-center text-2xl mb-5">Создать нового пользователя</h1>
        <input v-model="newUser" class="block w-full py-2 px-4 border rounded-xl outline-none" type="text"
            placeholder="Введите ФИО">
        <button class="w-fit px-4 py-2 bg-slate-500 text-white mx-auto mt-5 block">Создать</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const newUser = ref('')
</script>