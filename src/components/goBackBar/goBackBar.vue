<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button
        v-if="back != void(0)"
        @click="backPage"
      >
        <v-ons-icon icon="fa-arrow-left"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">
      {{title}}
    </div>
  </v-ons-toolbar>
</template>

<script>
export default {
  props: [
    'title',
    'back'
  ],
  methods: {
    backPage () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
