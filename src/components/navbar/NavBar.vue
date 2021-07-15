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

          <!-- Botão de Minha Conta -->
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
              <router-link class="dropdown-item" to='/profile-info'>Meu Perfil</router-link>
              <router-link class="dropdown-item" to='/profile-edit'>Editar Perfil</router-link>
              <router-link class="dropdown-item" to='/cart'>Carrinho</router-link>
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
                @click.stop.prevent="filterBooksByCategory('Todos')"
                class="dropdown-item"
                href="#"
                >Todos</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Romance')"
                class="dropdown-item"
                href="#"
                >Romance</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Aventura')"
                class="dropdown-item"
                href="#"
                >Aventura</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Biografias')"
                class="dropdown-item"
                href="#"
                >Biografias</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Ficção')"
                class="dropdown-item"
                href="#"
                >Ficção</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Humor')"
                class="dropdown-item"
                href="#"
                >Humor</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Científico')"
                class="dropdown-item"
                href="#"
                >Científico</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Poesia')"
                class="dropdown-item"
                href="#"
                >Poesia</a
              >
              <a
                @click.stop.prevent="filterBooksByCategory('Suspense')"
                class="dropdown-item"
                href="#"
                >Suspense</a
              >
            </ul>
          </li>

          <!-- Botão Administrador -->
          <li v-if="isLoggedIn && user.admin" class="nav-item">
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
            v-model='search'
          />
            <input @click.prevent='filterBooksByString()' class="btn btn-outline-dark" type="submit" name="new" value="Pesquisar">
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
      user: {},
      search: ''
    }
  },
  created () {
    EventBus.$on('login', user => {
      this.isLoggedIn = true
      this.user = user
      window.user = user
      if (!window.cart) {
        window.cart = []
      }
      this.$router.push({ name: 'home' })
    })
    EventBus.$on('logout', () => {
      this.isLoggedIn = false
      this.user = {}
      window.user = null
      window.cart = null
      this.$router.push({ name: 'home' })
    })
  },
  methods: {
    filterBooksByCategory (category) {
      EventBus.$emit('set-filter', category)
    },

    filterBooksByString () {
      var search = this.search
      EventBus.$emit('set-search', search)
    },

    async doLogout () {
      await this.$firebase.auth().signOut()
      this.isLoggedIn = false
      this.user = null
      window.user = null
      this.$router.push({ name: 'home' })
    },

    async doLogin () {
      const { email, password } = this
      try {
        var firebaseUser = await this.$firebase.auth().signInWithEmailAndPassword(email, password)
        var user = await this.getUser(firebaseUser.user.uid)
        window.user = user
        this.user = user
        this.isLoggedIn = true
        this.$router.push({ name: 'home' })
      } catch (error) {
        console.log(error)
        alert('Erro ao realizar login')
      }
    },

    async getUser (uid) {
      var user = await this.$firebase.database()
        .ref(`users/${uid}`)
        .get()
      return user.val()
    }

  }
}
</script>

<style scoped lang="scss">
#bar {
  background-color: var(--main-color);
  width: 100%;
  min-width: 900px;
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
