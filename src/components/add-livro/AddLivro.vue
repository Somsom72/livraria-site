<template>
<!-- Formaulario de Cadastro de Livro -->
    <div id="admin-panel">
        <div class="card m-3 p-2" id="admin-form">
            <div class="card-block">
                <form class="form-group">
                    <label for="">Título:</label>
                    <input v-model='title' type="text" name="title" placeholder="Título" class="form-control" required><br>
                    <label for="">Descrição:</label>
                    <textarea v-model='description' rows="5" class="form-control" required></textarea><br>
                    <label for="">Preço:</label>
                    <input v-model='price' type="number" name="price" min="0" placeholder="R$0.00" class="form-control" required><br>
                    <label for="">Quantidade:</label>
                    <input v-model='ammount' type="number" name="ammount" min="1" placeholder="Quantidade" class="form-control" required><br>
                    <label for="">Categorias:</label><br>
                    <input type="checkbox" value='Romance' v-model="categories"> Romance <br>
                    <input type="checkbox" value='Aventura' v-model="categories"> Aventura <br>
                    <input type="checkbox" value='Biografias' v-model="categories"> Biografias <br>
                    <input type="checkbox" value='Ficção' v-model="categories"> Ficção <br>
                    <input type="checkbox" value='Humor' v-model="categories"> Humor <br>
                    <input type="checkbox" value='Científico' v-model="categories"> Científico <br>
                    <input type="checkbox" value='Poesia' v-model="categories"> Poesia <br>
                    <input type="checkbox" value='Suspense' v-model="categories"> Suspense <br><br>
                    <label for="">Preview:</label>
                    <textarea v-model='preview' rows="5" class="form-control" required></textarea><br>
                    <label for="">Foto de capa: </label>
                    <input @change='handleFile($event)' required type="file" name="cover" accept='image/*' class="btn btn-primary"><br><br>
                    <input @click.prevent='submit()' class="btn btn-primary" type="submit" name="new" value="Registrar Produto">
                </form><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      price: '',
      ammount: '',
      preview: '',
      file: '',
      categories: []
    }
  },

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
    clearFields () {
      this.title = ''
      this.description = ''
      this.price = ''
      this.ammount = ''
      this.preview = ''
      this.file = ''
      this.categories = []
    },

    async submit () {
      let url = ''

      try {
        const ref = this.$firebase.database().ref(`books/${this.title}`)

        if (this.file) {
          const snapshot = await this.$firebase.storage().ref('covers').child(this.fileName).put(this.file)
          url = await snapshot.ref.getDownloadURL()
        }

        const payload = {
          title: this.title,
          description: this.description,
          price: this.price,
          ammount: this.ammount,
          preview: this.preview,
          coverUrl: url,
          categories: this.categories
        }

        ref.set(payload)

        alert('Livro Cadastrado')

        this.clearFields()
      } catch (err) {
        console.log(err)
        alert('Erro ao cadastrar livro')
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
