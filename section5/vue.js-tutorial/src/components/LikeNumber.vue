<template>
  <div>
    <p>いいね ({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ['totalNumber'],
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      // 親には届かない
      // 分かりやすいデータフローにするため、単一方向になっている
      // this.totalNumber += 1;

      // 送り口を書く
      // $emit('イベントの好きな名前', データの処理)
      this.$emit('my-click', this.totalNumber += 1);
    }
  },
};
</script>