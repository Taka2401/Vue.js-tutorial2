<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録することで呼び出すことができる
import LikeHeader from "./LikeHeader.vue"

export default {
  components: {
    LikeHeader,
  }
};
</script>
