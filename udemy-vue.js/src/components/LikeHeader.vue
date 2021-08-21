<template>
  <div>
    <slot>
      <h1>デフォルト</h1>
    </slot>
    <h2>{{ headerText }}</h2>
  </div>
</template>

<script>
export default {
  props: ['headerText']
};
</script>

