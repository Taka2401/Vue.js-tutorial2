<template>
    <p>いいね ({{ totalNumber / 2 }})</p>
</template>

<script>
export default {
  // JSファイルはキャメルケースで書く
  props: ['totalNumber'],

};
</script>