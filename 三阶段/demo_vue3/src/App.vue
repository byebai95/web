<template>
    <div class="app">
        <h1>Hello World</h1>
        <Person/>
    </div>
</template>

<script lang="ts">
import Person from './components/Person.vue'
export default {
    name: 'App',
    components: {
        Person
    }
}
</script>

<style scoped>
.app {
    background-color: #ddd;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    border-radius: 5px;
    margin: 10px;
}
</style>