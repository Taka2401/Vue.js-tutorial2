<template>
    <p>いいね ({{ halfNumber }})</p>
</template>

<script>
export default {
  // 配列で複数渡せる
  props: ['totalNumber', 'testProps'],
  // props: {
  //   totalNumber: {
  //     type: Number,
  //     default: 10
  //   },
  //   // 複数propsのバリデーションを作れる
  //   testProps: {
  //     type: String
  //   }
  // },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  }
};
</script>