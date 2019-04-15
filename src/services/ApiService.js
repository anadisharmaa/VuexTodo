/*
 * Service to make http api calls
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from '../store'
import Actions from '../store/Actions'

Vue.use(VueAxios, axios)

const ApiService = {
  sendRequest: (aMethod, aUrl, aHeaders, aData, cb) => {
    // turn on the loading indicator
    store.dispatch({ type: Actions.LOADING_SCREEN, show: true })

    // API call configurations
    const config = {
      method: aMethod,
      url: aUrl,
      headers: aHeaders,
      data: aData
    }

    // sending request
    Vue.axios(config)
      // handles success
      .then(response => {
        // turn off the loading indicator
        store.dispatch({ type: Actions.LOADING_SCREEN, show: false })
        // reset the error message
        cb(response.data)
      })
      // handles errors
      .catch(e => {
        // turn off the loading indicator
        store.dispatch({ type: Actions.LOADING_SCREEN, show: false })
        // set the error message
      })
  }
}

export default ApiService
