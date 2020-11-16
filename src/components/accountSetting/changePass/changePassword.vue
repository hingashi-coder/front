<template>
  <v-ons-page>
    <goBackBar
      title="パスワード変更"
      back
    />
    <v-ons-list>
      <v-ons-list-item>
        <v-ons-input placeholder='現在のパスワード' v-model="oldPass" type="password"/>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder='新しいパスワード' v-model="newPass"/>
      </v-ons-list-item>
      <v-ons-list-item>
        <v-ons-input placeholder='新しいパスワード' v-model="newPassCheck"/>
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
      if (this.oldPass === this.newPass) {
        this.$ons.notification.alert('パスワードが同じです')
      } else if (this.newPass === this.newPassCheck) {
        this.$ons.notification.alert('OK')
      } else {
        this.$ons.notification.alert('パスワードが違います')
      }
    }
  }
}
</script>

<style>

</style>
