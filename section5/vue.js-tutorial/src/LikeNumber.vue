<template>
    <p>いいね ({{ number }})</p>
</template>

<script>
// ローカル登録しないとLikeHeaderは使えない
export default {
  data() {
    return {
      number: 5
    };
  }
};
</script>