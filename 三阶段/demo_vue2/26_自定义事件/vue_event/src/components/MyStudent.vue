<template>
    <div>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
        <button @click="sendStudentName">点我显示学生姓名</button>
        <!-- 解绑事件 -->
        <button @click="unbind">解绑事件</button>


    </div>
</template>

<script>
export default {
    name: 'MyStudent',
    data() {
        return {
            name: '张三',
            age: 18
        }
    },
    methods: {
        sendStudentName() {
            this.$emit('sname', this.name)
        },
        unbind() {
            this.$off('sname')
        }
    }
}
</script>

<style></style>