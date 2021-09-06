<template>
    <p>いいね ({{ halfNumber }})</p>
</template>

<script>
export default {
  props: {
    // バリデーション
    //totalNumber: String

    // オブジェクトでも書ける
    totalNumber: {
      // 型
      type: Number,

      // totalNumberが必ず必要
      // required: true

      // オブジェクトだと関数で初期値を設定
      default() {
        return {
          number: 5
        }
      }
    }
  },
  computed: {
    halfNumber() {
      // propsで受け取った値もthisを使える
      return this.totalNumber / 2;
    }
  }
};
</script>