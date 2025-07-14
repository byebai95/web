<template>
  <div id="app">
    test1:
    <TestCss_1 />
    <hr>
    test2:
    <TestCss_2 />
    <hr>
    test3:
    <TestCss_3 />
  </div>
</template>

<script>
import TestCss_1 from './components/TestCss_1.vue'
import TestCss_2 from './components/TestCss_2.vue'
import TestCss_3 from './components/TestCss_3.vue'
export default {
  name: 'App',
  components: {
    TestCss_1,
    TestCss_2,
    TestCss_3
  }
}
</script>

<style></style>
