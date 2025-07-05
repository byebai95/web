<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
    name: 'MyStudent',
    // data() {
    //     return {
    //         name: '张三',
    //         age: 18
    //     }
    // },
    props:{
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: false,
        default: 18
      },
      sex: {
        type: String,
        default: '男'
      }
    }
}
</script>

<style>

</style>