import { onMounted } from 'vue';
import { getProduct, route } from './ProductPage.vue';

onMounted(() => {
    await getProduct(route.params.id);
});
