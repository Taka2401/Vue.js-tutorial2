<template>
  <div>
    <LikeHeader>
      <template #[title]="slotProps">
        <h2>{{ slotProps }}</h2>
        <p>はじめまして</p>
        <p>皆さん</p>
        <p>よろしくお願いします。</p>
      </template>
      <h1>デフォルト</h1>
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
      number :14,
      title: 'title'
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

