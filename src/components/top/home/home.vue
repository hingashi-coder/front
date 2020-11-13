<template>
  <v-ons-page>
    <p>うんこ</p>
    <v-ons-button @click="latest">ボタン</v-ons-button>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
import axios from 'axios'
export default {
  methods: {
    latest () {
      return new Promise((resolve, reject) => {
        firebase.getToken().then((token) => {
          axios.post(process.env.VUE_APP_SERVER + '/latest', {
            token: token
          }).then(e => {
            console.log(e.data)
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
