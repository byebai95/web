<template>
  <div id="app">
    <CategoryItem title="食物">
      <img src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg" alt="">
    </CategoryItem>

    <CategoryItem title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </CategoryItem>

    <CategoryItem title="衣服">
      <video controls src="https://vod.v.jstv.com/2025/07/09/JSTV_JSGGNEW_1752060650284_9ia62Nc_1678.mp4" alt="" />
    </CategoryItem>
  </div>
</template>

<script>
import CategoryItem from './components/CategoryItem.vue'

export default {
  name: 'App',
  data() {
    return {
      food: ['apple', 'banana', 'cherry'],
      games: ['lol', 'csgo', 'dota2'],
      clothes: ['shirt', 'pants', 'shoes']
    }
  },
  components: {
    CategoryItem
  }
}
</script>

<style scoped>
#app {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>
