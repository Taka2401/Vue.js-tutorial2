<template>
  <div>
    <LikeHeader>
      <p>はじめまして</p>
      <template v-slot:title>
        <h1>Hello</h1>
      </template>
      <p>皆さん</p>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
      <p>よろしくお願いします。</p>
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

