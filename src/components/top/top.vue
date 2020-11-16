<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">スマートポスト</div>
    </v-ons-toolbar>
    <v-ons-tabbar
      swipeable
      position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="$store.state.homeMenuIndex"
      >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import home from './home/home'
import setting from './setting/setting'
export default {
  data () {
    return {
      tabs: [
        {
          icon: 'fa-home',
          label: 'Home',
          page: home
        },
        {
          icon: 'fa-cog',
          label: 'Setting',
          page: setting
        }
      ]
    }
  }
}
</script>

<style>

</style>
