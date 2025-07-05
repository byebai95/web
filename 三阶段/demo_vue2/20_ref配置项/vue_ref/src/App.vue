<template>
    <div>
        <SchoolStudent class="sch"  ref="stu"/>
        <h5 ref="h5">组件名称：{{ name }}</h5>
        <button @click="showName">Ref组件</button>
        <button @click="showName2">Ref标签</button>
    </div>
</template>

<script>
import SchoolStudent from './components/SchoolStudent.vue'
export default {
    name: 'App',
    components: {
        SchoolStudent,
    },
    data() {
        return {
            name: "App"
        }
    },
    methods: {
        showName() {
            console.log(this.$refs.stu)
        },
        showName2() {
            console.log(this.$refs.h5)
        }
    }
}
</script>



<style>
.sch {
    background-color: #f00;
}
</style>