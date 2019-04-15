// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// custom modules
import App from './App'
import store from './store'
import Actions from './store/Actions'
import ApiService from './services/ApiService'

Vue.config.productionTip = false

ApiService.sendRequest(
  'GET',
  'https://jsonplaceholder.typicode.com/todos/',
  {},
  {},
  response => store.dispatch({ type: Actions.ADD_TODOS, todos: response })
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // this will inject the store instance to all child components
  store,
  components: { App },
  template: '<App/>'
})
