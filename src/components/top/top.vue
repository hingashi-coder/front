<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">スマートポスト</div>
    </v-ons-toolbar>
    <v-ons-tabbar
      swipeable
      position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
      >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
import axios from 'axios'
import home from './home/home'
import setting from './setting/setting'
export default {
  data () {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: 'fa-home',
          label: 'Home',
          page: home
        },
        {
          icon: 'fa-cog',
          label: 'Setting',
          page: setting
        }
      ]
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
