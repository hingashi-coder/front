<template>
  <v-ons-page>
    <goBackBar
      title="パスワード変更"
      back
    />
    <v-ons-list>
      <v-ons-list-item>
        <v-ons-input placeholder='新しいパスワード' v-model="newPass" type="password"/>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder='確認' v-model="newPassCheck" type="password"/>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-button
    modifier="large"
    style="margin: 6px 0"
    @click="changePassword"
    >変更</v-ons-button>
  </v-ons-page>
</template>

<script>
import goBackBar from '@/components/goBackBar/goBackBar'
import firebase from '@/firebase.js'
export default {
  components: {
    goBackBar
  },
  data () {
    return {
      oldPass: '',
      newPass: '',
      newPassCheck: ''
    }
  },
  methods: {
    changePassword () {
      if (this.newPass === this.newPassCheck) {
        firebase.changePass(this.newPass).then(() => {
          this.$ons.notification.alert('変更完了').then(() => {
            this.$router.go(-1)
          })
        }).catch(msg => {
          this.$ons.notification.alert(msg)
        })
      } else {
        this.$ons.notification.alert('パスワードが違います')
      }
    }
  }
}
</script>

<style>

</style>
