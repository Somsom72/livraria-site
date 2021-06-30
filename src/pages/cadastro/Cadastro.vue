<template>
<div class="cadastro">
  <div class="card m-4 p-3" id="signup-form">
    <div class="card-block">
      <h1> Cadastro </h1>
      <img src="../../assets/img/profile-icon.png" id="icon" alt="profile icon"><br>
      <p id="normal-text"> Cadastre-se: </p>
      <form class="form-group">
        <label for="">Email: </label><br>
        <input v-model='email' type="text" name="email" autocomplete="off" placeholder="Email" class="form-control" required><br>
        <label for="">Nome: </label><br>
        <input v-model='name' type="text" name="text" autocomplete="off" placeholder="Nome" class="form-control" required><br>
        <label for="">Senha: </label><br>
        <input v-model='password' type="text" name="password" autocomplete="off" placeholder="Senha" class="form-control" required><br>
        <label for="">Telefone: </label><br>
        <input v-model='phone' type="tel" name="phone" autocomplete="off" placeholder="XX XXXXX XXXX" pattern="[0-9]{2} [0-9]{5} [0-9]{4}" class="form-control" required><br>
        <label for="">Endereço: </label><br>
        <input v-model='address' type="text" name="address" autocomplete="off" placeholder="Endereço" class="form-control" required><br>
        <input class="btn btn-primary" type="submit" name="button" value="Cadastrar" @click.prevent='signUp()'>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'cadastro',
  data () {
    return {
      name: '',
      password: '',
      email: '',
      phone: '',
      address: '',
      user: {}
    }
  },
  methods: {
    async signUp () {
      try {
        var userCredential = await this.$firebase.auth()
          .createUserWithEmailAndPassword(this.email, this.password)

        const user = {
          id: userCredential.user.uid,
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          admin: false
        }
        const ref = this.$firebase.database().ref(`users/${userCredential.user.uid}`)
        ref.set(user)
        window.user = user
        alert('Usuario Cadastrado')
        this.$router.push({ name: 'home' })
      } catch (err) {
        alert('Erro ao cadastrar')
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

#normal-text, .small-text {
font-family: 'Open Sans', sans-serif;
text-align: center;
margin-bottom: 5px;
}

#normal-text {
font-size: 16px;
}

#small-text {
font-size: 14px;
}

 #signup-form{
    background-color: var(--main-color)
  }
</style>
