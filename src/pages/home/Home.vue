<template>
<!-- Grid de produtos -->
        <div class='row row-cols-4 mt-2'>
            <!-- Card de produto -->
            <div v-for='(book, i) in currentBooks' class='col mb-2' :key='i'>
                <div class='card ms-2 h-100' id='book-card'>
                    <!-- Imagem do livro -->
                    <img :src='book.coverUrl' class='card-img-top' :alt='book.title'>
                    <div class='card-body'>
                        <!-- Título -->
                        <h5 class='card-title'>{{book.title}}</h5>
                        <!-- Descrição -->
                        <p class='card-text' id="description">{{truncate(book.description)}}</p>
                        <!-- Preço -->
                        <h4 class='card-text'>R${{book.price}}</h4>
                        <!-- Botão de comprar -->
                        <button @click='goToBookDetails(i)' class='btn btn-light'>Mais Detalhes</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { EventBus } from '../../bus.js'

export default {
  name: 'home',

  async created () {
    await this.getData()
    this.filterBooksByCategory('Todos')
    EventBus.$on('set-filter', data => {
      this.filterBooksByCategory(data)
    })
    EventBus.$on('set-search', data => {
      if (data.trim().length > 0) {
        this.filterBooksByString(data)
      }
    })
  },

  async beforeUpdate () {
    await this.getData()
  },

  methods: {
    truncate (desc) {
      if (desc.lenght >= 200) {
        desc.substring(0, 200)
        desc += '...'
      }
      return desc
    },

    async getData () {
      const ref = await this.$firebase.database().ref('books').get()
      var books = ref.val()
      this.books = Object.keys(books).map(i => books[i])
    },

    filterBooksByCategory (category) {
      this.currentCategory = category
      if (this.currentCategory === 'Todos') {
        this.currentBooks = this.books
      } else {
        this.currentBooks = this.books.filter((book) => {
          return book.categories.includes(this.currentCategory)
        })
      }
    },

    filterBooksByString (string) {
      this.currentSearchString = string
      this.currentBooks = this.books.filter((book) => {
        return book.title.toLowerCase().includes(this.currentSearchString.toLowerCase())
      })
    },

    goToBookDetails (i) {
      this.$router.push({ name: 'book-info', params: { book: this.currentBooks[i] } })
    }
  },

  data () {
    return {
      books: [],
      currentCategory: '',
      currentSearchString: '',
      currentBooks: []
    }
  }
}
</script>

<style scoped lang='scss'>
  #book-card{
    max-width: 300px;
    min-width: 100px;
    background-color:
    var(--main-color);
  }
  #description{
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
