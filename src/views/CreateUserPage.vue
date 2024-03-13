<template>
    <form @submit.prevent="createUser">
        <input type="text" v-model="text" class="border p-4" placeholder="ВВедите имя пользователя">
        <button>Создать</button>
    </form>
</template>

<script setup>
import { useUsersStore } from '@/stores/UsersStore';
import { ref } from 'vue';
const text = ref('')

const userStore = useUsersStore()

function createUser() {
    userStore.users.push(text.value)
    text.value = ''
    console.log(userStore.users)
}

</script>