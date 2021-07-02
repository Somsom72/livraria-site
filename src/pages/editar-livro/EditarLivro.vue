<template>
<!-- Formaulario de Edição de Livro -->
    <div id="editar-livro">
        <div class="card m-3 p-2" id="admin-form">
            <div class="card-block">
                <form class="form-group">
                    <h2 class="card-title">{{ book.title }}</h2><br>
                    <label for="">Descrição:</label>
                    <textarea v-model='book.description' rows="5" class="form-control" required></textarea><br>
                    <label for="">Preço:</label>
                    <input v-model='book.price' type="number" name="price" min="0" placeholder="R$0.00" class="form-control" required><br>
                    <label for="">Quantidade:</label>
                    <input v-model='book.ammount' type="number" name="ammount" min="1" placeholder="Quantidade" class="form-control" required><br>
                    <label for="">Categorias:</label><br>
                    <input type="checkbox" value='Romance' v-model="book.categories"> Romance <br>
                    <input type="checkbox" value='Aventura' v-model="book.categories"> Aventura <br>
                    <input type="checkbox" value='Biografias' v-model="book.categories"> Biografias <br>
                    <input type="checkbox" value='Ficção' v-model="book.categories"> Ficção <br>
                    <input type="checkbox" value='Humor' v-model="book.categories"> Humor <br>
                    <input type="checkbox" value='Científico' v-model="book.categories"> Científico <br>
                    <input type="checkbox" value='Poesia' v-model="book.categories"> Poesia <br>
                    <input type="checkbox" value='Suspense' v-model="book.categories"> Suspense <br><br>
                    <label for="">Preview:</label>
                    <textarea v-model='book.preview' rows="5" class="form-control" required></textarea><br>
                    <label for="">Foto de capa: </label>
                    <input @change='handleFile($event)' required type="file" name="cover" accept='image/*' class="btn btn-primary"><br><br>
                    <input @click.prevent='submit()' class="btn btn-success btn-lg" type="submit" name="new" value="Salvar">
                </form><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'editar-livro',
  props: ['book'],
  computed: {
    fileName () {
      const file = this.file
      if (file) {
        const split = file.name.split('.')
        return `${new Date().getTime()}.${split[ split.length - 1 ]}`
      } else {
        return ''
      }
    }
  },

  methods: {
    async submit () {
      let url = null

      try {
        const ref = this.$firebase.database().ref(`books/${this.book.title}`)

        if (this.file) {
          const snapshot = await this.$firebase.storage().ref('covers').child(this.fileName).put(this.file)
          url = await snapshot.ref.getDownloadURL()
        }

        const payload = {
          title: this.book.title,
          description: this.book.description,
          price: this.book.price,
          ammount: this.book.ammount,
          preview: this.book.preview,
          coverUrl: url == null ? this.book.coverUrl : url,
          categories: this.book.categories
        }

        ref.update(payload)
        alert('Livro Editado')
        this.$router.push({ name: 'home' })
      } catch (err) {
        console.log(err)
        alert('Erro ao editar livro')
      }
    },

    handleFile ({ target }) {
      this.file = target.files[0]
    }
  }
}
</script>

<style scoped lang="scss">
  #admin-form{
    background-color: var(--main-color)
  }
</style>
