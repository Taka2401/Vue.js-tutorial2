<template>
  <div>
    <LikeHeader header-text="hello">
      <h1>トータルのいいね数</h1>
      <h1>{{ number }}</h1>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
  data() {
    return {
      number :14
    };
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  },
  components: {
    LikeHeader
  }
};
</script>

