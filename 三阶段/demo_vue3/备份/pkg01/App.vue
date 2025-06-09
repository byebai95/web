<template>
    <div>
        <h1>Hello World</h1>
    </div>
</template>

<script lang="ts">
export default {
    name: 'App',
    data() {
        return {
            message: 'Hello World'
        }
    }
}
</script>

<style>
h1 {
    background-color: #ddd;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}
</style>