<template>
<div class="carrinho">
  <div class="card m-4 p-3" id='main-card'>
    <h1> Meu Carrinho </h1>
    <img src="../../assets/img/shopping-cart-icon.jpg" class="icon" alt="shopping cart icon"><br>
    <div id="book-list">
      <div v-for='(item, i) in currentCartItems' class="book" :key='i'>
        <div class="title-area">
          {{ item.title }}
        </div>
        <div class="price-area">
          R${{ item.price }}
        </div>
        <div class="container p-4">
          <div class="row">
            <div class="col-sm">
              <button @click='decreaseItems(i)' id='ammount-button' class="btn btn-danger rounded-circle">-</button>
            </div>
            <div class="col-sm pt-1" id="ammount">
              {{ item.ammount }}
            </div>
            <div class="col-sm">
              <button @click='increaseItems(i)' id='ammount-button' class="btn btn-danger rounded-circle">+</button>
            </div>
          </div>
        </div>
      </div>
    </div><br>
      <p class="normal-text" style="font-size: 25px; margin-bottom: 5px; color: white;">TOTAL:</p>
      <div class="pill-block" style="height: 40px; width: 500px;">
        <div class= "pill-block-text" style="font-size: 20px;">
          R${{ totalAmmount }}
        </div>
      </div>
      <button v-if='totalAmmount > 0' class="btn btn-success mt-5" id="buy-button" @click='comprar()'>Comprar</button>
      <button v-else class="btn btn-success mt-5" id="buy-button" disabled>Comprar</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../bus.js'

export default {
  name: 'carrinho',
  computed: {
    totalAmmount: function () {
      var ammount = 0
      for (let i = 0; i < this.cartItems.length; i++) {
        ammount += this.cartItems[i].ammount * this.cartItems[i].price
      }
      return ammount.toFixed(2)
    },
    currentCartItems: function () {
      return this.cartItems
    }
  },

  created () {
    this.cartItems = window.cart

    EventBus.$on('update-cart', () => {
      this.updateCart()
    })
  },

  data () {
    return {
      cartItems: [
      ],
      canBuy: true,
      message: 'Houve um erro ao fechar o carrinho: '
    }
  },

  methods: {
    increaseItems (i) {
      if (this.cartItems[i].ammount < this.cartItems[i].maxAmmount) {
        this.cartItems[i].ammount++
      }
      this.updateCart()
    },

    decreaseItems (i) {
      if (this.cartItems[i].ammount > 1) {
        this.cartItems[i].ammount--
      } else {
        this.removeCartItem(i)
      }
      this.updateCart()
    },

    removeCartItem (index) {
      for (let i = 0; i < window.cart.length; i++) {
        if (window.cart[i].title === this.cartItems[index].title) {
          window.cart.splice(i, 1)
          this.cartItems = window.cart
          break
        }
      }
    },

    updateCart () {
      try {
        const ref = this.$firebase.database().ref(`users/${window.user.id}`)
        window.user.cart = window.cart
        this.cartItems = window.cart
        ref.update(window.user)
      } catch {
        alert('Erro ao salvar no carrinho')
      }
    },

    async comprar () {
      try {
        for (let i = 0; i < window.cart.length; i++) {
          var ref = await this.$firebase.database().ref(`books/${window.cart[i].title}`).get()
          var book = ref.val()
          //Se o livro exixteir no Banco de dados
          if (book) {
            //Se a quantidade de livros disponíveis for menor que o desejado
            if (book.ammount < window.cart[i].ammount) {
              this.canBuy = false
              this.message += `\n - ${window.cart[i].title}: Não há quantidade sufuciente em estoque.`
              //Se a quantidade disponível for maior que zero atualiza a quantidade atual e a quantidade máxima de ítens no carrinho para aquela quantidade
              if (book.ammount > 0) {
                window.cart[i].ammount = book.ammount
                window.cart[i].maxAmmount = book.ammount
              //Se a quantidade disponível for menor que zero remove o utem do carrinho
              } else {
                window.cart.splice(i, 1)
              }
            }
            //Se não exixtir remove ele do carrinho
          } else {
            this.canBuy = false
            this.message += `\n - ${window.cart[i].title}: Não é mais vendido na loja.`
            window.cart.splice(i, 1)
          }
        }
        //Se não houverem erros durante a compra
        if (this.canBuy) {
          //Itera pelos itens do carrinho e diminui a sua quantidade nos ítens da loja
          for (let i = 0; i < window.cart.length; i++) {
            var refWrite = this.$firebase.database().ref(`books/${window.cart[i].title}`)
            var refRead = await this.$firebase.database().ref(`books/${window.cart[i].title}`).get()
            var updatedBook = refRead.val()
            updatedBook.ammount -= window.cart[i].ammount
            refWrite.update(updatedBook)
          }
          //Limpa e atualiza o carrinho
          window.cart = []
          this.updateCart()
          this.canBuy = true
          this.$router.push({ name: 'bought-items' })
        } else {
          this.updateCart()
          alert(`${this.message}\nOs ítens foram removidos e/ou tiveram a sua quantidade corrigida, favor analisar novamente!`)
          this.canBuy = true
        }
      } catch {
        alert('Erro ao fechar compra! tente novamente mais tarde')
        this.canBuy = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
#main-card{
background-color: var(--main-color);
width: 900px
}

#ammount{
  font-size: 18px;
}

.icon {
display: block;
margin: auto;
height: 124px;
width: 124px;
border-radius: 50%;
}

h1 {
font-family: 'Pattaya', sans-serif;
font-size: 40px;
text-align: center;
}

.normal-text{
font-family: 'Open Sans', sans-serif;
text-align: center;
margin-bottom: 5px;
font-size: 16px;
}

.pill-block {
height: 30px;
width: 100px;
background-color: white;
border-style: solid;
border-color: grey;
border-radius: 20px;
border-width: 1px;
position: relative;
left: 50%;
transform: translate(-50%, 0);
}

.pill-block-text {
font-family: 'Open Sans', sans-serif;
font-size: 14px;
font-weight: bold;
text-align: center;
position: relative;
top: 50%;
transform: translate(0, -50%);
}

#ammount-button {
border-style: none;
text-align: center;
font-size: 18px;
font-weight: bold;
color: white;
cursor: pointer;
}

#buy-button{
  width: 150px;
  font-size: 20px;
  margin: 0 auto;
}

#book-list {
height: auto;
max-height: 500px;
width: 800px;
padding: 5px;
background-color: lightgrey;
border-radius: 5px;
overflow: auto;
margin: 0 auto;
}

.book {
display: grid;
border-radius: 4px;
background-color: white;
padding: 12px;
margin-bottom: 5px;
grid-template:
"title quantity-selector" 60px
"price quantity-selector" 20px
/ 75% 25%;
}

.title-area {
grid-area: title;
font-family: 'Crimson Text', serif;
font-style: italic;
font-size: 18px;
}

.price-area {
grid-area: price;
font-family: 'Open Sans', sans-serif;
font-size: 18px;
font-weight: bold;
}
</style>
