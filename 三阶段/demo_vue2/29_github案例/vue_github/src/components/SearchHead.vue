<template>
    <div class="search-head">
        <input type="text" v-model="search" placeholder="搜索">
        <button @click="searchUser">搜索</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SearchHead',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchUser() {
            axios.get(`https://api.github.com/search/users?q=${this.search}`).then(res => {
                this.$bus.$emit('searchUser', res.data.items)
            })
        }
    }
}
</script>

<style scoped>
.search-head {
    width: 100%;
    height: 100px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>