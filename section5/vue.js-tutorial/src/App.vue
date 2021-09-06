<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number}}</h2>
    <!-- $emitでの処理をnumberに代入する -->
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number" @my-click="increment"></LikeNumber>
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
  },
  methods: {
    // 引数に$emitの処理を渡すことができる
    increment(value) {
      this.number = value;
    }
  },
};
</script>
