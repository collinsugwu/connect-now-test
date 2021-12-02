<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  props: {
    to: { type: String, required: true },
    exact: { type: Boolean, default: false }
  },
  setup(props) {
    const route = useRoute()
    const active = computed(() =>
      props.exact ? route.path === props.to : route.path.startsWith(props.to)
    )
    return { active }
  }
})
</script>

<template>
  <div>
    <router-link
      :to="to"
      class="nav-link"
    >
      <slot />
    </router-link>
  </div>
</template>

<style scoped>
  .nav-link {
    font-size: 1.3rem;
    font-weight: 500;
  }
</style>
