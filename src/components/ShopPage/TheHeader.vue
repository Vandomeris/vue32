<template>
    <header class="container mx-auto px-5 flex items-center justify-between pb-6 pt-24">
        <div class=" text-2xl font-bold">Exclusive</div>
        <nav>
            <ul class="flex items-center gap-x-12">
                <li>
                    <HeaderLink link="/" text="Home" />
                </li>
                <li>
                    <HeaderLink link="/user/create" text="Create User" />
                </li>
                <li>
                    <HeaderLink link="/users" text="All users" />
                </li>
                <li>
                    <HeaderLink link="/products" text="Products" />
                </li>
            </ul>
        </nav>
        <div class="flex items-center gap-x-6">



            <div class="relative">
                <input placeholder="What are you looking for?"
                    class=" rounded-md min-w-64 pr-10 py-2.5 pl-5 outline-none bg-[#f5f5f5]" type="text">
                <button class="absolute top-1/2 transform -translate-y-1/2 right-4">
                    <SearchIcon />
                </button>
            </div>



            <a href="#">
                <HeartIcon />
            </a>
            <RouterLink to="/cart">
                <div :data-count="cartStore.productsCount" class="cart_icon">
                    <CartIcon />
                    <!-- <p v-if="cartStore.productsCount">{{ cartStore.productsCount }}</p> -->
                </div>
            </RouterLink>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import CartIcon from './Icons/CartIcon.vue';
import HeartIcon from './Icons/HeartIcon.vue';
import SearchIcon from './Icons/SearchIcon.vue';
import HeaderLink from './UiKit/HeaderLink.vue';
import { useCartStore } from '@/stores/CartStore';

const cartStore = useCartStore()

</script>

<style scoped>
.cart_icon {
    position: relative;
}

.cart_icon::before {
    position: absolute;
    content: attr(data-count);
    border-radius: 50%;
    background-color: red;
    color: #fff;
    left: -50%;
    top: -50%;
    height: 15px;
    width: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    font-weight: 700;
}
</style>