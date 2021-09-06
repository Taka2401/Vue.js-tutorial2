<template>
    <!-- データを反映させる -->
    <p>いいね ({{ number / 2 }})</p>
</template>

<script>
export default {
  // データを受け取る
  props: ['number'],

};
</script>