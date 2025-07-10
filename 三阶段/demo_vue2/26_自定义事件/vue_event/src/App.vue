<template>
  <div class="app">
    <!--方式一： 函数接收参数 -->
    <MySchool :getSchoolName="getSchoolName"/>
    <hr>

    <!--方式二： 自定义事件 -->
    <MyStudent @sname="showName"/>
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue'
import MyStudent from './components/MyStudent.vue'
export default {
  name: 'App',
  components: {
    MySchool,
    MyStudent
  },
  methods: {
    getSchoolName(name) {
      alert(name)
    },
    showName(name) {
      alert(name)
    }
  }
}
</script>

<style>
.app {
  background-color: lightblue;
}
</style>