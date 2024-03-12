<template>
    <div class="container mx-auto px-4 mt-5">
        <UserAddForm @mishaIArsen="createUser" />


        <ul class="flex flex-col gap-y-4">
            <li v-for="user in users" :key="user.id">{{ user.email }}</li>
        </ul>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import UserAddForm from './UserAddForm.vue';



const users = ref([])


function createUser(user) {

    users.value.push({
        name: user
    })
}

async function getUsers() {
    const response = await fetch('http://localhost:3000/api/users/get')
    const data = await response.json()
    users.value = data
}

onMounted(async () => {
    await getUsers()
})



</script>