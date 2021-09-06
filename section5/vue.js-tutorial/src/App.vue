<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ totalNumber}}</h2>
    <!-- 指定がないので初期値で設定される -->
    <LikeNumber></LikeNumber>
    <LikeNumber :total-number="totalNumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      totalNumber: 66
    }
  },
  components: {
    LikeHeader,
  }
};
</script>
