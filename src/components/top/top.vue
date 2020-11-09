<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">スマートポスト</div>
    </v-ons-toolbar>
    <v-ons-button @click="logout">ログアウト</v-ons-button>
    <router-link to="/authorization">Line認証</router-link>
    <router-link to="/deviceRegister">デバイス連携</router-link>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
import axios from 'axios'
export default {
  methods: {
    logout () {
      firebase.logout().then(() => {
        this.$router.replace('/login')
      })
    }
  },
  mounted () {
    firebase.getToken().then(token => {
      axios.post(process.env.VUE_APP_SERVER, {
        token: token
      }).then(e => {
        console.log(e)
      })
    })
  }
}
</script>

<style>

</style>
