<template>
    <div>
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我显示学校名称</button>
    </div>
</template>

<script>
import { mixin } from '../mixin';
export default {
    name: 'MySchool',
    data() {
        return {
            name: '尚硅谷',
            address: '北京'
        }
    },
    mixins: [mixin]
}
</script>

<style></style>