<template>
  <div class="app">
    <SearchHead />
    <SearchBody />
  </div>
</template>

<script>
import SearchHead from './components/SearchHead.vue'
import SearchBody from './components/SearchBody.vue'
export default {
  name: 'App',
  components: {
    SearchHead,
    SearchBody
  }
}
</script>
