<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">ログイン</div>
    </v-ons-toolbar>
    <v-ons-list>
      <v-ons-list-item>
        <div class="center">
          <v-ons-input
            placeholder="メールアドレス"
            float
            v-model="email"
            type="email"
          ></v-ons-input>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          <v-ons-input
            placeholder="パスワード"
            float
            v-model="password"
            type="password"
          ></v-ons-input>
        </div>
      </v-ons-list-item>
    </v-ons-list>
    <v-ons-button
      modifier="large"
      style="margin: 6px 0"
      @click="signin"
    >ログイン</v-ons-button>
    <v-ons-button
      modifier="large"
      style="margin: 6px 0"
      @click="$router.push({name: 'signup'})"
    >サインアップ</v-ons-button>
    <v-ons-button @click="$router.push({name: 'authorization'})"></v-ons-button>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.email,
          this.password
        )
        .then(() => {
          this.$router.replace('/')
        }).catch(() => {
          this.$ons.notification.alert(
            'メールアドレスかパスワードに誤りがあります',
            {
              title: 'ログイン失敗'
            }
          )
        })
    }
  }
}
</script>

<style>

</style>
