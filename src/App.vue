<template>
  <div id="app">
    <base-spinner></base-spinner>
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import BaseSpinner from './components/base_spinner/BaseSpinner'
import NavBar from './components/navbar/NavBar'
export default {
  name: 'App',

  components: {
    BaseSpinner,
    NavBar
  },

  mounted () {
    this.$firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null

      if (!window.uid) {
        this.$root.$emit('NavBar::unlogged')
        this.$router.pus({ name: 'home' })
      } else {
        this.$root.$emit('NavBar::logged')
      }
      this.$root.$emit('Spinner::hide')
    })
  },

  methods: {
    showSpinner () {
      this.$root.$emit('Spinner::show')
    }
  }
}
</script>
<style lang="scss">
</style>
