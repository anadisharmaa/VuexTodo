<template>
  <div>
    <p class="sort-btns">
      Sort by:
      <button id="sort-by-id" v-bind:class="[sortById]" v-on:click="sortBy('id')">ID</button>
      <button id="sort-by-order" v-bind:class="[sortByOrder]" v-on:click="sortBy('order')">Order</button>
      <button id="sort-by-random" v-bind:class="[sortByRandom]" v-on:click="sortBy('random')">Random</button>
    </p>

    <!-- TODO List to Populate -->
    <draggable id="todo-list" v-model="todos">
      <transition-group>
        <div v-for="todo in todos" :key="todo.id" v-on:click="selected(todo)" class="ui-state-default">
          <i v-if="todo.completed" class="fas fa-check"></i>
          <i v-if="!todo.completed" class="fas fa-times"></i>
          <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>{{ todo.title }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import Actions from '../store/Actions'
import draggable from 'vuedraggable'

export default {
  name: 'Todos',
  components: {
    draggable
  },
  data: function () {
    return {
      sortById: '',
      sortByOrder: '',
      sortByRandom: ''
    }
  },
  computed: {
    todos: {
      get: function () {
        return this.$store.state.todos
      },
      set: function (nTodos) {
        this.$store.dispatch({ type: Actions.ADD_TODOS, todos: nTodos })
      }
    }
  },
  methods: {
    selected (todo) {
      this.$store.dispatch({ type: Actions.SELECTED_TODO, selected: todo })
    },
    sortBy (prop) {
      this.sortById = (prop === 'id') ? 'selected' : ''
      this.sortByOrder = (prop === 'order') ? 'selected' : ''
      this.sortByRandom = (prop === 'random') ? 'selected' : ''
      this.$store.dispatch({ type: Actions.SORT_TODOS, prop: prop })
    }
  }
}
</script>
