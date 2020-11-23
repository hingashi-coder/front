<template>
  <v-ons-page>
    <goBackBar
      title="メールアドレス変更"
      back
    />
      <v-ons-list>
        <v-ons-list-item>
          <v-ons-input placeholder='新しいメールアドレス' v-model="oldAddress"/>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-input placeholder='確認' v-model="newAddress"/>
        </v-ons-list-item>
    </v-ons-list>
    <v-ons-button
      modifier="large"
      style="margin: 6px 0"
      @click="checkAddress"
    >変更</v-ons-button>
  </v-ons-page>
</template>

<script>
import goBackBar from '@/components/goBackBar/goBackBar'
import firebase from '@/firebase.js'
export default {
  data () {
    return {
      oldAddress: '',
      newAddress: ''
    }
  },
  components: {
    goBackBar
  },
  methods: {
    checkAddress () {
      if (this.oldAddress === this.newAddress) {
        firebase.changeAddress(this.newAddress).then(() => {
          this.$ons.notification.alert('OK').then(() => {
            this.$router.go(-1)
          })
        }).catch(msg => {
          console.log('tesss')
          console.log(msg)
          this.$ons.notification.alert(msg)
        })
      } else {
        this.$ons.notification.alert('入力したアドレスが違います。')
      }
    }
  }
}
</script>

<style>

</style>
