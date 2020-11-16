<template>
  <v-ons-page>
    <goBackBar
      title="アカウント設定"
      back
    />
    <v-ons-list>
      <v-ons-list-header>ログインとセキュリティ</v-ons-list-header>
      <v-ons-list-item
        tappable
        v-for="menu in settingMenu"
        :key="menu.title"
        @click="menu.clickCallback"
      >
      <div class="left">{{menu.title}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import goBackBar from '@/components/goBackBar/goBackBar'
export default {
  components: {
    goBackBar
  },
  data () {
    const self = this
    return {
      settingMenu: [
        {
          title: 'メールアドレス変更',
          clickCallback () {
            self.$router.push({
              name: 'changeAddress'
            })
          }
        },
        {
          title: 'パスワード変更',
          clickCallback () {
            self.$router.push('changePassword')
          }
        }
      ]
    }
  }
}
</script>

<style>

</style>
