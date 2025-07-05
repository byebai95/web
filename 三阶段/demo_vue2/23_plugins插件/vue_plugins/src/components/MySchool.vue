<template>
    <div class="demo">
        <h2>学校名称：{{ name | mySlice }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我显示学校名称</button>
    </div>
</template>

<script>
export default {
    name: 'MySchool',
    data() {
        return {
            name: '尚硅谷XXYY',
            address: '北京'
        }
    }
}
</script>

<!-- 使用scoped属性，表示样式只在本组件中生效    -->
<style scoped>
.demo {
    background-color: gray;
}
</style>