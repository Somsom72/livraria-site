<template>
<div class="editar-perfil">
  <div class="card m-4 p-3" id="profile-form">
    <div class="card-block">
      <h1> Editar Perfil </h1>
      <img src="../../assets/img/profile-icon.png" id="icon" alt="profile icon"><br>
      <p class="normal-text"> Editar Perfil: </p>
      <form class="form-group">
        <label for="">Nome: </label><br>
        <input v-model='user.name' type="text" name="text" autocomplete="off" placeholder="Nome" class="form-control" required><br>
        <label for="">Telefone: </label><br>
        <input v-model='user.phone' type="tel" name="phone" autocomplete="off" placeholder="XX XXXXX XXXX" pattern="[0-9]{2} [0-9]{5} [0-9]{4}" class="form-control" required><br>
        <label for="">Endereço: </label><br>
        <input v-model='user.address' type="text" name="address" autocomplete="off" placeholder="Endereço" class="form-control" required><br>
        <input class="btn btn-primary" type="submit" name="button" value="Salvar" @click.prevent='changeUserInfo()'>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'editar-perfil',
  data () {
    return {
      emailBefore: '',
      user: {}
    }
  },

  beforeMount () {
    this.user = window.user
    this.emailBefore = this.user.email
  },

  methods: {
    async changeUserInfo () {
      try {
        const ref = this.$firebase.database().ref(`users/${this.user.id}`)
        if (this.emailBefore !== this.user.email) {
          const user = this.$firebase.auth().currentUser
          user.updateEmail(this.user.email)
        }
        ref.update(this.user)
        window.user = this.user
        alert('Informações atualizadas com sucesso')
      } catch (err) {
        alert('Erro ao atualizar')
      }
    }
  }

}
</script>

<style scoped lang="scss">
#icon {
display: block;
margin: auto;
height: 124px;
width: 124px;
border-radius: 50%;
}

.normal-text, .small-text {
font-family: 'Open Sans', sans-serif;
text-align: center;
margin-bottom: 5px;
color: white
}

.normal-text {
font-size: 25px;
}

.small-text {
font-size: 16px;
}

#profile-form{
background-color: var(--main-color);
width: 1000px
}
</style>
