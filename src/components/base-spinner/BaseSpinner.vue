<template>
  <div v-if="visible" class="d-flex justify-content-center" id="base-spinner">
  <div class="spinner-border" role="status">
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  created () {
    this.$root.$on('Spinner::show', () => {
      this.visible = true
    })

    this.$root.$on('Spinner::hide', () => {
      this.visible = false
    })
  }
}
</script>

<style scoped lang="scss">
#base-spinner {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000000;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-color);
}
</style>
