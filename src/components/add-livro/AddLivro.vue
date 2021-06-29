<template>
<!-- Formaulario de Cadastro de Livro -->
    <div id="admin-panel">
        <div class="card m-3 p-2" id="admin-form">
            <div class="card-block">
                <form class="form-group">
                    <label for="">Título:</label>
                    <input v-model='title' type="text" name="text" placeholder="Nome" class="form-control" required><br>
                    <label for="">Descrição:</label>
                    <input v-model='description' type="text" name="descricao" placeholder="Descrição" class="form-control" required><br>
                    <label for="">Preço:</label>
                    <input v-model='price' type="number" name="Preço" min="0" placeholder="R$0.00" class="form-control" required><br>
                    <label for="">Quantidade:</label>
                    <input v-model='ammount' type="number" name="quantidade" min="1" placeholder="Quantidade" class="form-control" required><br>
                    <label for="">Preview:</label>
                    <textarea v-model='preview' rows="5" class="form-control" required></textarea><br>
                    <label for="">Foto de capa: </label>
                    <input @change='handleFile($event)' required type="file" name="foto" accept='image/*' class="btn btn-primary"><br><br>
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
      file: ''
    }
  },

  computed: {
    fileName () {
      const file = this.file
      if (file) {
        const split = file.name.split('.')
        return `${this.title}.${split[ split.length - 1 ]}`
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
    },

    async submit () {
      let url = ''

      try {
        const ref = this.$firebase.database().ref(this.title)

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
          coverUrl: url
        }

        ref.set(payload)

        alert('Livro Cadastrado')

        this.clearFields()
      } catch (err) {
        console.log(err)
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
