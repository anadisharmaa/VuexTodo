import Vue from 'vue'
import Vuex from 'vuex'

import Actions from './Actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    todos: [],
    selectedTodo: {}
  },
  getters: {
    sortTodoByProp: (state) => (prop) => {
      return state.todos.sort((a, b) => a[prop] - b[prop])
    }
  },
  mutations: {
    [Actions.LOADING_SCREEN] (state, payload) {
      state.isLoading = payload
    },
    [Actions.ADD_TODOS] (state, payload) {
      state.todos = payload
    },
    [Actions.SELECTED_TODO] (state, payload) {
      state.selectedTodo = payload
    },
    [Actions.SORT_TODOS] (state, payload) {
      if (payload !== 'random') {
        state.todos.sort((a, b) => a[payload] - b[payload])
      } else {
        state.todos.sort((a, b) => 0.5 - Math.random())
      }
    }
  },
  actions: {
    [Actions.LOADING_SCREEN] ({ commit }, payload) {
      commit(Actions.LOADING_SCREEN, payload.show)
    },
    [Actions.ADD_TODOS] ({ commit }, payload) {
      // adding order to each item
      payload.todos.forEach((todo, index) => {
        todo.order = index
      })
      commit(Actions.ADD_TODOS, payload.todos)
    },
    [Actions.SELECTED_TODO] ({ commit }, payload) {
      commit(Actions.SELECTED_TODO, payload.selected)
    },
    [Actions.SORT_TODOS] ({ commit }, payload) {
      commit(Actions.SORT_TODOS, payload.prop)
    }
  }
})
