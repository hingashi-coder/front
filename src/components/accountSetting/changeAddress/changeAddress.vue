<template>
  <v-ons-page>
    <goBackBar
      title="メールアドレス変更"
      back
    />
      <v-ons-list>
        <v-ons-list-item>
          <v-ons-input placeholder='今のメールアドレス' v-model="oldAddress"/>
        </v-ons-list-item>
        <v-ons-list-item>
          <v-ons-input placeholder='新しいメールアドレス' v-model="newAddress"/>
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
        this.$ons.notification.alert('OK')
      } else {
        this.$ons.notification.alert('違います')
      }
    }
  }
}
</script>

<style>

</style>
