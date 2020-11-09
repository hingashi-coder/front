<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">認証画面</div>
    </v-ons-toolbar>
    <div class="center">
      <v-ons-input v-model="checkCode"></v-ons-input>
    </div>
    <div class="left">
    <v-ons-button @click="authCheck">認証</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
import axios from 'axios'
export default {
  data () {
    return {
      checkCode: ''
    }
  },
  methods: {
    authCheck () {
      this.sendAuthCode(this.checkCode).then(() => {
        console.log('OK')
      }).catch(err => {
        console.log(err)
        this.$ons.notification.alert(
          err.toString(),
          {
            title: 'ログイン失敗'
          }
        )
      })
    },
    sendAuthCode (code) {
      return new Promise((resolve, reject) => {
        firebase.getToken().then(token => {
          axios.post(process.env.VUE_APP_SERVER + '/line', {
            token: token,
            authCode: Number(this.checkCode)
          }).then(e => {
            console.log(e)
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
