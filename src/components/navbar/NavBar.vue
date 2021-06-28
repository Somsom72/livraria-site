<template>
  <!-- Barra de navegação -->
  <nav class="navbar navbar-expand-lg navbar-dark" id="bar">
    <div class="container-fluid">
      <!-- Título da página -->
      <a class="navbar-brand" href="home.html" id="title-text">Livraria ICMC</a>

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
            <a
              class="nav-link active"
              aria-current="page"
              href="home.html"
              id="menu-text"
              >Home</a
            >
          </li>

          <!-- Botão cadastrar -->
          <li class="nav-item">
            <a
              class="nav-link"
              href="cadastro.html"
              style="color: white; font-size: 1.2em"
              >Cadastrar</a
            >
          </li>

          <!-- Botão de Login -->
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
              Login
            </a>
            <!-- Form de Login -->
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <form>
                <!-- Input Email -->
                <div class="form-group dropdown-item">
                  <label for="inputEmail">Email</label>
                  <input
                    type="email"
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
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="senha"
                  />
                </div>
                <!-- Botão de Login -->
                <button type="submit" class="btn btn-primary ms-3 mt-2">
                  Entrar
                </button>
              </form>
            </ul>
          </li>

          <!-- Botão de Minha Conta -- Fazer v-if v-else com login -->
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
              Minha Conta
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="profile-info.html">Meu Perfil</a>
              <a class="dropdown-item" href="cart.html">Carrinho</a>
              <a class="dropdown-item" href="profile-edit.html"
                >Editar Perfil</a
              >
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
          <li class="nav-item">
            <a
              class="nav-link"
              href="admin.html"
              tabindex="-1"
              aria-disabled="true"
              style="color: white; font-size: 1.2em"
              >Administrador</a
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
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables";
#bar {
  background-color: $main-color;
}
#title-text {
  font-size: 3em;
  font-family: Dancing Script;
  color: $font-color;
}
#menu-text{
  color: white;
  font-size: 1.2em;
}
</style>
