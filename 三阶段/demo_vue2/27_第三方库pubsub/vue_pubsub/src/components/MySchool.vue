<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchoolName">发送学校名称给学生</button>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    name: 'MySchool',
    props: ['getSchoolName'],
    data() {
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
    methods: {
        sendSchoolName() {
            PubSub.publish('sname', this.name)
        }
    }
}
</script>

<style>
.school {
    background-color: rgb(224, 115, 115);
    margin: 10px;
    height: 200px;
}
</style>