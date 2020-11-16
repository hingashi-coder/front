<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-list-header>設定</v-ons-list-header>
      <v-ons-list-item
        tappable
        v-for="menu in settings"
        :key="menu.title"
        @click="menu.clickCallback"
      >
      <div class="left">{{menu.title}}</div>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-list>
      <v-ons-list-header>アカウント</v-ons-list-header>
      <v-ons-list-item
        tappable
        v-for="menu in accountSettings"
        :key="menu.title"
        @click="menu.clickCallback"
      >
        <div class="left">{{menu.title}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
export default {
  data () {
    const self = this
    return {
      accountSettings: [
        {
          title: 'ログアウト',
          clickCallback () {
            firebase.logout().then(() => {
              self.$router.replace('/login')
            })
          }
        },
        {
          title: 'test',
          clickCallback () {
            self.$ons.notification.alert('test')
          }
        },
        {
          title: 'アカウント設定',
          clickCallback () {
            self.$router.push('/accountSetting')
          }
        }
      ],
      settings: [
        {
          title: 'デバイスの追加',
          clickCallback () {
            self.$router.push({
              name: 'deviceRegister'
            })
          }
        },
        {
          title: 'Line認証',
          clickCallback () {
            self.$router.push({
              name: 'authorization'
            })
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
