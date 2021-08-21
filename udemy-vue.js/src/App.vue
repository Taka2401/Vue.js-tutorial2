<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h1>Hello</h1>
      </template>
      <template v-slot:number>
        <h2>いいねの数</h2>
        <h2>{{ number }}</h2>
      </template>
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

