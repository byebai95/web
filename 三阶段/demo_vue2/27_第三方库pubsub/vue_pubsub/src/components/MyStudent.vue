<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>

    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    name: 'MyStudent',
    data() {
        return {
            name: '张三',
            age: 18
        }
    },
    mounted() {
        this.pubId = PubSub.subscribe('sname', (msg, data) => {
            console.log('学生收到了学校名称', data)
        })
    },
    beforeDestroy() {
        PubSub.unsubscribe(this.pubId)
    }
}
</script>

<style>
.student {
    background-color: lightblue;
    margin: 10px;
    height: 150px;
}
</style>