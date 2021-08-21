<template>
  <div>
    <slot name="title" :user="user"></slot>
    <slot></slot>
    <hr>
    <h2>いいねの数</h2>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'jack',
        lastName: 'daniel'
      }
    }
  }
};
</script>

