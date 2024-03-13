import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('CartStore', () => {

    const cart = ref([])

    // const productsCount = computed(() => cart.value.length)

    // function calculateSum() {
    //     let totalSum = 0
    //     cart.value.forEach((el) => {
    //         totalSum += el.price
    //     })
    //     return totalSum
    // }

    return {
        cart,
        // productsCount,
        // calculateSum
    }

})