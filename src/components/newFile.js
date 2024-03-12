import { onMounted } from 'vue';
import { users, getUsers } from './UsersList.vue';

onMounted(() => {
users.value = await getUsers();

console.log(users.value);
});
