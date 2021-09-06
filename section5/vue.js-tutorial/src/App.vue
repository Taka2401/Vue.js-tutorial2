<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ totalNumber}}</h2>
    <LikeNumber :total-number="totalNumber" :testProps=5></LikeNumber>
    <LikeNumber :total-number="totalNumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      totalNumber: 20
    }
  },
  components: {
    LikeHeader,
  }
};
</script>
