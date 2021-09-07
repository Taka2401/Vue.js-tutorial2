<template>
  <div class="container">
    <h2>ToDoList</h2>
    <form @submit.prevent>
      <input type="text" v-model="newItem">
      <button @click="addItem">送信</button>
    </form>

    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo.item }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      todos: []
    }
  },
  methods: {
    addItem() {
      // alert('alert');
      if(this.newItem === '') return;
      const todo = {
        item: this.newItem
      };
      this.todos.push(todo);
      this.newItem = ''
    }
  }
};
</script>

<style>
  .container {
    text-align: left;
  }
</style>