<template>
  <div id="app">
    <h1>To Do List Example</h1>
    <Todos />
    <TodoDetails />
    <Loading />
  </div>
</template>

<script>
// built-in css
import '@fortawesome/fontawesome-free/css/all.css'
// custom css
import './assets/styles/main.css'

// custom modules
import Todos from '@/components/Todos'
import TodoDetails from '@/components/TodoDetails'
import Loading from '@/components/Loading'

export default {
  name: 'App',
  components: {
    Todos,
    TodoDetails,
    Loading
  }
}
</script>
