<template>
    <div>
        <h1>当前结果：{{ num }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">+</button>
        <button @click="sub">-</button>
    </div>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {
            n: 1
        }
    },
    computed: {
        num() {
            return store.state.num
        }
    },
    methods: {
        add() {
            store.dispatch('add', this.n)
        },
        sub() {
            store.dispatch('sub', this.n)
        }
    }
}
</script>

<style>
button {
    margin-left: 10px;
}
</style>