<template>
  <div>
    <slot></slot>
    <h2>{{ headerText }}</h2>
  </div>
</template>

<script>
export default {
  props: ['headerText']
};
</script>

