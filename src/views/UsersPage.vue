<template>
    <h1>Все пользователи</h1>

    <div class="flex flex-wrap">
        <div v-for="user in userStore.users" :key="user.name">
            {{ user }}
        </div>
    </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/UsersStore';

const userStore = useUsersStore()

</script>