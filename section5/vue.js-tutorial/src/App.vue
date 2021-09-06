<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ totalNumber}}</h2>
    <!-- v-bindでpropsに渡す値にデータを指定する -->
    <LikeNumber :number="totalNumber"></LikeNumber>

    <!-- 静的に値も渡せる -->
    <!-- <LikeNumber number="8"></LikeNumber> -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      totalNumber: 10
    }
  },
  components: {
    LikeHeader,
  }
};
</script>
