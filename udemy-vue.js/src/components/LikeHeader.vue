<template>
  <div>
    <slot name="title"></slot>
    <slot></slot>
    <hr>
    <h2>いいねの数</h2>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ['headerText']
};
</script>

