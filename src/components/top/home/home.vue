<template>
  <v-ons-page>
    <p>{{timestamp}}</p>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
import axios from 'axios'
export default {
  data () {
    return {
      timestamp: ''
    }
  },
  methods: {
    latest () {
      return new Promise((resolve, reject) => {
        firebase.getToken().then((token) => {
          axios.post(process.env.VUE_APP_SERVER + '/latest', {
            token: token
          }).then(e => {
            resolve(e.data)
          })
        })
      })
    }
  },
  mounted () {
    const data = this.latest()
    data.then((e) => {
      this.timestamp = e.time
    })
    this.timestamp = 'データ取得中'
  }
}
</script>

<style>

</style>
