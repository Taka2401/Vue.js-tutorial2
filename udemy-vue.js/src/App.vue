<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :likeNumber="number"></LikeNumber>
    <LikeNumber :likeNumber="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
  data() {
    return {
      number :18
    };
  },
  components: {
    LikeHeader
  }
};
</script>
