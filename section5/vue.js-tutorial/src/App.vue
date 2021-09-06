<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number}}</h2>
    <!-- $emitでの処理をnumberに代入する -->
    <LikeNumber :total-number="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      number: 20
    }
  },
  components: {
    LikeHeader,
  }
};
</script>
