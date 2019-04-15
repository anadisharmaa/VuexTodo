<template>
  <div class="vld-parent">
    <loading :active="isLoading"
             :can-cancel="false"
             :is-full-page="true"></loading>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>
