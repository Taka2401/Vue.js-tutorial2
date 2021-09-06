<template>
    <p>いいね ({{ halfNumber }})</p>
</template>

<script>
export default {
  // JSファイルはキャメルケースで書く
  props: ['totalNumber'],
  computed: {
    halfNumber() {
      // propsで受け取った値もthisを使える
      return this.totalNumber / 2;
    }
  }
};
</script>