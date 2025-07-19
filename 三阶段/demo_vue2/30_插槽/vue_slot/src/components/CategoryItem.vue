<template>
    <div class="category-item">
        <h3>{{ title }}</h3>

        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CategoryItem',
    props: {
        list: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.category-item {
    width: 300px;
    height: 400px;
    background-color: lightgray;
}

h3 {
    text-align: center;
    background-color: yellow;
}

ul {
    list-style: none;
}
</style>