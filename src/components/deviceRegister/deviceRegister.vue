<template>
  <v-ons-page>
    <goBackBar
      title="ポスト登録"
      back
    />
    <v-ons-list>
      <v-ons-listitem>
        <div class="left">デバイスID</div>
      </v-ons-listitem>
      <v-ons-listitem>
        <v-ons-input v-model="deviceID"></v-ons-input>
      </v-ons-listitem>
      <v-ons-listitem>
        <div class="left">ポストの名前</div>
      </v-ons-listitem>
      <v-ons-listitem>
        <v-ons-input v-model="postCustomName"></v-ons-input>
      </v-ons-listitem>
    </v-ons-list>
    <v-ons-button @click="register">登録</v-ons-button>
  </v-ons-page>
</template>

<script>
import goBackBar from '@/components/goBackBar/goBackBar'
import firebase from '@/firebase.js'
import axios from 'axios'
export default {
  components: {
    goBackBar
  },
  methods: {
    register () {
      firebase.getToken().then(token => {
        axios.post(process.env.VUE_APP_SERVER + '/device', {
          token: token,
          DeviceID: this.deviceID,
          postCustomName: this.postCustomName
        }).then(e => {
          if (e.data.status === 'OK') {
            console.log('ok')
          } else {
            console.log(e.data.msg)
          }
        })
      })
    }
  },
  data () {
    return {
      deviceID: '',
      postCustomName: ''
    }
  }
}
</script>

<style>

</style>
