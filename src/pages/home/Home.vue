<template>
<!-- Grid de produtos -->
        <div class='row row-cols-4 mt-2'>
            <!-- Card de produto -->
            <div v-for='(book, i) in currentBooks' class='col mb-2' :key='i'>
                <div class='card ms-2 h-100' id='book-card'>
                    <!-- Imagem do livro -->
                    <img :src='book.imageUrl' class='card-img-top' :alt='book.title'>
                    <div class='card-body'>
                        <!-- Título -->
                        <h5 class='card-title'>{{book.title}}</h5>
                        <!-- Descrição -->
                        <p class='card-text'>{{book.description}}</p>
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
    this.filterBooks('Todos')
  },

  beforeCreate () {
    // TODO: Carregar lista de livros
  },

  methods: {
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
      books: [
        {
          title: 'O Hobbit',
          imageUrl: 'img/covers/the_hobbit.jpg',
          description: 'Praesent euismod semper lectus in tristique. Fusce at nisl ac massa ultrices porttitor id sed ipsum. Sed sit amet libero tempus, tempus nibh at elementum dolor.',
          price: '4,20',
          categories: ['Ficção', 'Aventura']
        },
        {
          title: 'Senhor dos Aneis',
          imageUrl: 'img/covers/the_hobbit.jpg',
          description: 'Praesent euismod semper lectus in tristique. Fusce at nisl ac massa ultrices porttitor id sed ipsum. Sed sit amet libero tempus, tempus nibh at elementum dolor.',
          price: '4,20',
          categories: ['Ficção', 'Aventura']
        }
      ],
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
</style>
