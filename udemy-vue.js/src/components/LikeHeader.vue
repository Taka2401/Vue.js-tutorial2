<template>
  <div>
    <slot name="title" :user="user"></slot>
    <slot></slot>
    <hr>
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

