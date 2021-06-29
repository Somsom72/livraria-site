<template>
  <!-- Barra de navegação -->
  <nav class="navbar navbar-expand-lg navbar-dark" id="bar">
    <div class="container-fluid">
      <!-- Título da página -->
      <router-link to="/" class="navbar-brand" id="title-text">Livraria ICMC</router-link>

      <!-- Botao do menu -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Conteúdo do menu -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Botão Home -->
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/"
              id="menu-text"
              >Home</router-link>
          </li>

          <!-- Botão cadastrar -->
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link
              class="nav-link"
              to="/cadastro"
              style="color: white; font-size: 1.2em"
              >Cadastrar</router-link
            >
          </li>

          <!-- Botão de Login -->
          <li v-if="!isLoggedIn" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="color: white; font-size: 1.2em"
            >
              Login
            </a>
            <!-- Form de Login -->
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <form @submit.prevent='doLogin()'>
                <!-- Input Email -->
                <div class="form-group dropdown-item">
                  <label for="inputEmail">Email</label>
                  <input
                    required
                    type="email"
                    v-model='email'
                    class="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="email"
                  />
                </div>
                <!-- Input Senha -->
                <div class="form-group dropdown-item">
                  <label for="exampleInputPassword1">Senha</label>
                  <input
                    required
                    type="password"
                    v-model='password'
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="senha"
                  />
                </div>
                <!-- Botão de Login -->
                <div class="form-group dropdown-item">
                  <input
                  class="btn btn-primary ms-3 mt-2"
                  type="submit"
                  value="Login"
                  @click.prevent='doLogin()'
                  />
                </div>

              </form>
            </ul>
          </li>

          <!-- Botão de Minha Conta -- Fazer v-if v-else com login -->
          <li v-if="isLoggedIn" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="color: white; font-size: 1.2em"
            >
              Minha Conta
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="profile-info.html">Meu Perfil</a>
              <a class="dropdown-item" href="cart.html">Carrinho</a>
              <a class="dropdown-item" href="profile-edit.html"
                >Editar Perfil</a
              >
              <a class="btn dropdown-item" @click.prevent='doLogout()'>Logout</a>
            </ul>
          </li>

          <!-- Botão de Categoria -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="color: white; font-size: 1.2em"
            >
              Categorias
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                @click.stop.prevent="filterBooks('Todos')"
                class="dropdown-item"
                href="#"
                >Todos</a
              >
              <a
                @click.stop.prevent="filterBooks('Romance')"
                class="dropdown-item"
                href="#"
                >Romance</a
              >
              <a
                @click.stop.prevent="filterBooks('Aventura')"
                class="dropdown-item"
                href="#"
                >Aventura</a
              >
              <a
                @click.stop.prevent="filterBooks('Biografias')"
                class="dropdown-item"
                href="#"
                >Biografias</a
              >
              <a
                @click.stop.prevent="filterBooks('Ficção')"
                class="dropdown-item"
                href="#"
                >Ficção</a
              >
              <a
                @click.stop.prevent="filterBooks('Humor')"
                class="dropdown-item"
                href="#"
                >Humor</a
              >
              <a
                @click.stop.prevent="filterBooks('Científico')"
                class="dropdown-item"
                href="#"
                >Científico</a
              >
              <a
                @click.stop.prevent="filterBooks('Poesia')"
                class="dropdown-item"
                href="#"
                >Poesia</a
              >
              <a
                @click.stop.prevent="filterBooks('Suspense')"
                class="dropdown-item"
                href="#"
                >Suspense</a
              >
            </ul>
          </li>

          <!-- Botão Administrador -->
          <li v-if="isLoggedIn /* && user.isAdmin */" class="nav-item">
            <router-link
              class="nav-link"
              to='/admin'
              aria-disabled="true"
              style="color: white; font-size: 1.2em"
              >Administrador</router-link
            >
          </li>
        </ul>

        <!-- Barra de Pesquisa -->
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Pesquisa"
            aria-label="Search"
          />
          <button class="btn btn-outline-dark" type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { EventBus } from '../../bus.js'

export default {
  name: 'NavBar',
  data () {
    return {
      email: '',
      password: '',
      isLoggedIn: false,
      user: {}
    }
  },
  created () {
    this.$root.$on('NavBar::logged', () => {
      this.isLoggedIn = true
    })
    this.$root.$on('NavBar::unlogged', () => {
      this.isLoggedIn = false
      this.$router.pus({ name: 'home' })
    })
  },
  methods: {
    filterBooks (category) {
      EventBus.$emit('set-filter', category)
    },
    async doLogout () {
      await this.$firebase.auth().signOut()
      this.isLoggedIn = false
    },
    async doLogin () {
      const { email, password } = this
      var nav = this
      try {
        await this.$firebase.auth().signInWithEmailAndPassword(email, password).then(function (response) {
          console.log(response)
          window.uid = response.user.uid
          nav.isLoggedIn = true
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
#bar {
  background-color: var(--main-color);
}
#title-text {
  font-size: 3em;
  font-family: Dancing Script;
  color: var(--font-color);
}
#menu-text{
  color: white;
  font-size: 1.2em;
}
</style>
