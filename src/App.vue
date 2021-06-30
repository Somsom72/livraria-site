<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar'
import { EventBus } from './bus.js'
export default {
  name: 'App',

  components: {
    NavBar
  },

  async mounted () {
    var currentUser = await this.$firebase.auth().currentUser
    if (currentUser !== null && currentUser.uid !== null) {
      var user = await this.getUser(currentUser.uid)
      EventBus.$emit('login', user)
    }
    this.$firebase.auth().onAuthStateChanged(firebaseUser => {
      if (!firebaseUser) {
        EventBus.$emit('logout')
        this.$router.push({ name: 'home' })
      } else {
        const user = this.getUser(firebaseUser.uid)
        EventBus.$emit('login', user)
      }
    })
  },

  methods: {
    async getUser (uid) {
      var user = await this.$firebase.database()
        .ref(`users/${uid}`)
        .get()
      return user.val()
    }
  }
}
</script>
<style lang="scss">
</style>
