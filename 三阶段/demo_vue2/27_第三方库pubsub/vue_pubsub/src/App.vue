<template>
  <div class="app">
    <MySchool/>
    <MyStudent />
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
    }
  }
}
</script>

<style>
.app {
  background-color: rgb(157, 169, 157);
  height:600px;
  padding: 10px;
  margin: 10px;
}
</style>