<template>
  <div id="app">
    <p>いいね({{ likeNumber / 2 }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ['likeNumber'],
  methods: {
    increment: function() {
      this.number += 1;
    }
  },
}
</script>

<style>
</style>
