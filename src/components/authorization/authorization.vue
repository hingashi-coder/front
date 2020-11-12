<template>
  <v-ons-page>
    <goBackBar
      title="認証画面"
      back
    />
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
import goBackBar from '@/components/goBackBar/goBackBar'
export default {
  components: {
    goBackBar
  },
  data () {
    return {
      checkCode: ''
    }
  },
  methods: {
    authCheck () {
      this.sendAuthCode(this.checkCode).then(() => {
        this.$ons.notification.alert(
          '正常にLineと連携できました。',
          {
            title: '成功'
          }
        )
      }).catch(err => {
        console.log(err)
        this.$ons.notification.alert(
          err.toString(),
          {
            title: '認証失敗'
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
            if (e.data.status === 'OK') {
              resolve()
            } else {
              reject(e.data.msg)
            }
          })
        })
      })
    }
  }
}
</script>

<style>

</style>
