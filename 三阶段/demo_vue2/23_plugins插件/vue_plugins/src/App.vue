<template>
  <div>
    <MySchool></MySchool>
    <hr>
    <MyStudent></MyStudent>
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
  }
}
</script>

<style></style>