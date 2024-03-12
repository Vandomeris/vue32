<template>
    <h1 class="text-2xl text-center font-bold mt-5">Конвертер валют</h1>

    <div class="w-1/3 mx-auto mt-5">
        <h2>Введите рубли</h2>
        <input type="number" v-model="rubles" class="border py-2 px-4 mt-3 w-full" placeholder="Введите сумму в рублях">
        <p class="mt-2">Вы ввели {{ rubles }} рублей</p>
    </div>

    <div class="flex justify-between gap-10">

        <div>
            <p>Доллар США</p>
            <p>{{ dollar }}</p>
        </div>
        <div>
            <p>ЕВРО</p>
            <p>{{ euro }}</p>
        </div>

    </div>
</template>


<script setup>
import { computed, ref, watch, watchEffect } from 'vue';

const anotherVar = ref()
const rubles = ref(100)

const dollar = computed(() => {
    return (rubles.value / 92).toFixed(2)
})

const euro = computed(() => (rubles.value / 102).toFixed(2))


watchEffect(() => {
    console.log('Вы ввели сумму в рублях - ' + dollar.value);
})

// watch([rubles, anotherVar], () => {
//     console.log('Отправлено в БД');
// })

</script>