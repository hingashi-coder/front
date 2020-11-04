<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">スマートポスト</div>
    </v-ons-toolbar>
    <v-ons-button @click="logout">ログアウト</v-ons-button>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
// import axios from 'axios'
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
      // axios.post('http://localhost:3000')
      console.log(process.env.VUE_APP_SERVER)
    })
  }
}
</script>

<style>

</style>
