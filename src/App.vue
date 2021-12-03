<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  components: { Header }
})
</script>

<style>
body {
  height: 100%;
  background: linear-gradient(#081221, #03080f);
  color: #ffffff;
}
a {
  text-decoration: none;
  color: #ffffff;
}
a:hover {
  text-decoration: none;
  color: #ffffff;
}
</style>
