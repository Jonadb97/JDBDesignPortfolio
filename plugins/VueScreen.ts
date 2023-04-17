import Vue from 'vue'
import { defineNuxtPlugin } from '#app'
import VueScreen from 'vue-screen'

export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.vueApp.use(VueScreen)
  })