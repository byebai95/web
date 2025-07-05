<template>
  <div>
    <MyStudent :name="name" />
    <hr>
    <MyStudent :name="name" age="22" :sex="sex" />
    <hr>
  </div>
</template>

<script>
import MyStudent from './components/MyStudent.vue'
export default {
  name: 'App',
  components: {
    MyStudent
  },
  data() {
    return {
      name: '张三',
      sex: 'man'
    }
  }
}
</script>

<style></style>