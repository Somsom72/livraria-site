<template>
<div class="sobre-livro">
  <div class="card m-4 p-3 text-center" id="main-card">
    <!-- Linha de cima da página, com o botão de voltar e de adicionar ao carrinho. -->
      <div class="text-center main-colored">
        <strong class="screen-text">Quantidade em Estoque: {{book.ammount}}</strong>
      </div><br>
      <div class="text-center main-colored">
        <strong class="screen-text">Preço: R${{book.price}}</strong>
      </div>

      <!-- Conteúdo principal da página. -->
      <div class="text-center">
        <table>
          <tbody>
            <tr>
                <td>
                  <div style="position:relative; text-align:center; margin:auto; padding:10px">
                      <h2>{{book.title}}</h2>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                      <img class="capa-de-livro" :src="book.coverUrl" style="display:block; position:relative; margin:auto; padding:10px">
                    </div>
                </td>
            </tr>
            <tr>
              <td>
                <div style="position:relative; text-align:center; margin:auto; padding:30px">
                  <strong class="screen-text">Descrição do Livro: </strong>
                  <div width="700px">{{book.description}}</div>
                </div>
              </td>
            </tr>
              <tr>
                <td>
                  <div class="preview">
                    {{ book.preview }}
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
    </div>
    <div class="container">
      <div class="row">
        <div v-if='isAdmin' class="text-center col-sm" style="margin: 10px 5% 10px 5%;">
          <button @click='editBook()' class="btn btn-warning btn-lg" type="button" name="carrinho">Editar</button>
        </div>
        <div v-if='!isNotLogged' class="text-center col-sm" style="margin: 10px 5% 10px 5%;">
          <button class="btn btn-success btn-lg" type="button" name="carrinho">Adicionar ao Carrinho</button>
        </div>
        <div v-if='isAdmin' class="text-center col-sm" style="margin: 10px 5% 10px 5%;">
          <button @click='removeBook()' class="btn btn-danger btn-lg" type="button" name="carrinho">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'sobre-livro',
  props: ['book'],
  computed: {
    isNotLogged: function () {
      return window.user === null || window.user === {}
    },
    isAdmin: function () {
      return !this.isNotLogged && window.user.admin
    }
  },

  methods: {
    editBook () {
      this.$router.push({ name: 'book-edit', params: { book: this.book } })
    },

    async removeBook () {
      try {
        const ref = this.$firebase.database().ref(`books`)
        ref.remove(this.book.title)
        alert('Livro Excluido')
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.log(err)
        alert('Erro ao excluir livro')
      }
    }
  }
}
</script>

<style scoped lang="scss">
#main-card{
background-color: var(--main-color);
width: 900px;
}

.capa-de-livro{
width: 400px;
}

.screen-text{
font-size: 20px;
}

.preview{
  background-color:rgba(226, 248, 238, 0.89);
  overflow: auto;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  padding: 10px;
}

.description{
width: 700px;
position:relative;
text-align:center;
margin: 0 10px;
padding:20px
}

.elemento-alinhado{
margin: 10px 5% 10px 5%;
padding: 10px;
}
</style>
