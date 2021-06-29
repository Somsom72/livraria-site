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
                        <h4 class='card-text'>{{book.price}}</h4>
                        <!-- Botão de comprar -->
                        <a href='sobre_livro.html' class='btn btn-light'>Mais Detalhes</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  created () {
    this.getData()
    this.filterBooks('Todos')
  },

  updated () {
    this.getData()
  },

  methods: {
    truncate (desc) {
      if (desc.lenght >= 200) {
        desc.substring(0, 200)
        desc += '...'
      }
      return desc
    },
    getData () {
      const ref = this.$firebase.database().ref('/')
      ref.on('value', snapshot => {
        const values = snapshot.val()
        this.books = values
      })
      // console.log(this.books)
    },
    applyFilter (book) {
      return book.categories.includes(this.currentCategory)
    },
    filterBooks (category) {
      this.currentCategory = category
      if (this.currentCategory === 'Todos') {
        this.currentBooks = this.books
      } else {
        this.currentBooks = this.books.filter(this.applyFilter)
      }
    }
  },

  data () {
    return {
      books: [],
      currentCategory: '',
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
