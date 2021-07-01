<template>
<div class="carrinho">
  <div class="card m-4 p-3">
    <h1> Meu Carrinho </h1>
    <img src="../../assets/img/shopping-cart-icon.jpg" class="icon" alt="shopping cart icon"><br>
    <div id="book-list">
      <div v-for='(item, i) in cartItems' class="book" :key='i'>
        <div class="title-area">
          {{ item.title }}
        </div>
        <div class="price-area">
          R${{ item.price }}
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <button type="button" class="btn btn-danger rounded">
                +
              </button>
            </div>
            <div class="col-sm">
              {{ item.ammount }}
            </div>
            <div class="col-sm">
              <button type="button" class="minus-button">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div><br>
      <p class="normal-text" style="font-size: 16px; margin-bottom: 5px;">TOTAL:</p>
      <div class="pill-block" style="height: 40px; width: 130px;">
        <div class= "pill-block-text" style="font-size: 20px;">
          R${{ totalAmmount }}
        </div>
      </div>
      <button type="button" name="buy" id="buy">
        Comprar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carrinho',
  computed: {
    totalAmmount: function () {
      return 0
    }
  },

  data () {
    return {
      cartItems: [
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
        {
          title: 'TESTE',
          price: 25.99,
          ammount: 12,
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
a {
color: black;
}

#profile-option, #cart-option {
height: 330px;
width: 360px;
background-color: aliceblue;
border-radius: 14px;
padding: 40px;
position: absolute;
top: 50%;
transform: translate(0, -50%);
}

#profile-option {
left: 15%;
}

#cart-option {
right: 15%;
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

.normal-text, .small-text {
font-family: 'Open Sans', sans-serif;
text-align: center;
margin-bottom: 5px;
}

.normal-text {
font-size: 16px;
}

.small-text {
font-size: 14px;
}

#info-container, #edit-container, #cart-container {
height: auto;
background-color: aliceblue;
border-radius: 10px;
padding: 50px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
}

#info-container {
width: 320px;
}

#edit-container {
width: 320px;
}

#cart-container {
width: 400px;
}

.pill-block {
height: 30px;
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

form {
font-family: 'Open Sans', sans-serif;
font-size: 16px;
}

input{box-sizing:border-box}

input {
outline: none;
border-radius: 5px;
border-style: solid;
border-width: 1px;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
height: 34px;
width: 100%;
}

button {
height: 40px;
border-radius: 20px;
border-style: none;
position: relative;
left: 50%;
transform: translate(-50%, 0);
text-align: center;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
font-weight: bold;
color: white;
cursor: pointer;
}

#edit {
margin-top: 25px;
width: 90px;
background-color: deepskyblue;
}

#update {
margin-top: 50px;
width: 110px;
background-color: deepskyblue;
}

#buy {
margin-top: 45px;
width: 85px;
background-color: #c23a2c;
}

#book-list {
height: auto;
max-height: 500px;
width: 500px;
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
"title quantity-selector" 40px
"price quantity-selector" 20px
/ 60% 40%;
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
font-size: 14px;
font-weight: bold;
}

.quantity-selector-area {
grid-area: quantity-selector;
margin: auto;
}

.plus-button, .quantity, .minus-button {
display: inline-block;
height: 24px;
width: 24px;
border-style: none;
border-radius: 50%;
background-color: #c23a2c;
font-family: 'Open Sans', sans-serif;
font-size: 12px;
color: white;
}

.quantity {
font-size: 16px;
font-weight: normal;
color: black;
width: 50px
}
</style>
