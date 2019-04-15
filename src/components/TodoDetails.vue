<template>
  <div id="todo-details">
    <p>Click a TODO to render details</p>
    <div v-if="selectedTodo.id">
      <h3>TODO</h3>
      <p>Id: {{ selectedTodo.id }}</p>
      <p>title: {{ selectedTodo.title }}</p>
      <p>order: {{ selectedTodo.order }}</p>
      <p>complete?
        <span v-if="selectedTodo.completed"><i class="fas fa-check"></i> yes</span>
        <span v-if="!selectedTodo.completed"><i class="fas fa-times"></i> no</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoDetails',
  computed: {
    selectedTodo () {
      return this.$store.state.selectedTodo
    }
  }
}
</script>
