<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">新規登録</div>
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
        <v-ons-input
          placeholder="メールアドレス(確認)"
          float
          v-model="emailConfirm"
          type="email"
        ></v-ons-input>
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
      @click="registration"
    >登録</v-ons-button>
  </v-ons-page>
</template>

<script>
import firebase from '@/firebase.js'
export default {
  methods: {
    registration () {
      if (this.email.length > 0 && this.email === this.emailConfirm) {
        if (this.password.length > 0) {
          firebase.signup(
            this.email,
            this.password
          ).then(() => {
            this.$ons.notification.alert('登録完了', {
              title: 'Welcome!'
            }).then(() => {
              this.$router.push('/')
            })
          }).catch(msg => {
            this.$ons.notification.alert(
              msg,
              {
                title: 'エラー'
              }
            )
          })
        } else {
          this.$ons.notification.alert(
            'パスワードが入力されていません。',
            {
              title: 'エラー'
            }
          )
        }
      } else {
        this.$ons.notification.alert(
          'メールアドレスが入力されていないか一致していません。',
          {
            title: 'エラー'
          }
        )
      }
    }
  },
  data () {
    return {
      email: '',
      emailConfirm: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
