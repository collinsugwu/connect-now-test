<template>
  <div class="container">
    <div class="row header">
      <div class="col-md-12 col-lg-3">
        <HeaderLink to="/" exact>VIDEO GAMES</HeaderLink>
      </div>
      <div class="col-md-12 col-lg-9">
        <HeaderLink to="/contact">CONTACT</HeaderLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLink from './HeaderLink.vue'

export default defineComponent({
  components: { HeaderLink }
})
</script>

<style scoped>
  .header {
    padding: 3rem 2rem 2rem 1rem;
  }
</style>
