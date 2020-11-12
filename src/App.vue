<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<style>
.v-enter-active, .v-leave-active {
  transform: translate(0px, 0px);
  transition: transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.v-enter{
  transform: translateX(100vh);
}
</style>
