<template>
    <div class="search-body">
        <div class="user-list">
            <div class="user-item" v-for="user in users" :key="user.id">
                <div class="user-info">
                    <img :src="user.avatar_url" alt="avatar" @click="toUser(user.html_url)">
                    <h3>{{ user.login }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBody',
    data() {
        return {
            users: []
        }
    },
    created() {
        this.$bus.$on('searchUser', (users) => {
            this.users = users
        })
    },
    methods: {
        toUser(url) {
            window.open(url, '_blank')
        }
    }
}
</script>

<style scoped>
.search-body {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
}

.user-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}

.user-item {
    width: 150px;
    height: 180px;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border-radius: 10px;
    padding: 15px 0;
}

.user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.user-item img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.user-item h3 {
    margin: 0;
    font-size: 16px;
    color: #333;
    text-align: center;
    word-break: break-all;
}
</style>