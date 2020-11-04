<template>
  <div id="app">
    <transition appear>
      <router-view/>
    </transition>
  </div>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity .5s
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
