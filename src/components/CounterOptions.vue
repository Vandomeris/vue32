<template>
    <h2>Счетчик с использованием Options API</h2>
    <div>Счетчик: {{ count }}</div>
    <button @click="increment">+++</button>
    <button @click="decrement">---</button>
</template>

<script>

export default {
    data() {
        return {
            count: 10,
            title: 'Hello'
        }
    },
    methods: {
        increment() {
            if (this.count < 20)
                this.count++
        },

        decrement() {
            if (this.count > 0)
                this.count--
        }
    }
}

</script>