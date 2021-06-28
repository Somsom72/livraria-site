<template>
  <div id="app">
    <nav-bar></nav-bar>
    <books-grid></books-grid>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar'
import BooksGrid from './components/books_grid/BooksGrid'
export default {
  components: {
    NavBar,
    BooksGrid
  },
  mounted () {
    console.log(this.$firebase)
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
