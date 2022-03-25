<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <LinkChannel msg="Xlink Server"></LinkChannel>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LinkChannel from './components/XLinkChannel.vue'
//import { reactive, toRefs, computed, onBeforeMount, onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    LinkChannel
  },
  setup() {
  }

}
</script>
