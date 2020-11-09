<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">認証画面</div>
    </v-ons-toolbar>
    <div class="center">
      <v-ons-input v-model="checkCode"></v-ons-input>
    </div>
    <div class="left">
    <v-ons-button >認証</v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  methods: {
    authCheck () {

    }
  }
}
</script>

<style>

</style>
