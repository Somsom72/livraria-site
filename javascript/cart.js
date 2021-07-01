function total() {
  let price = document.getElementsByClassName('price-area');
  let quantity = document.getElementsByClassName('quantity');
  let total_price = document.getElementById('total-price');

  let float = 0.0;
  for(let id = 0; id < price.length; id++) {
    float += parseFloat(price[id].innerText.replace('R$', '').replace(',','.')).toFixed(2) *
    parseInt(quantity[id].innerText);
  }

  total_price.innerText = 'R$ ' + float.toFixed(2).toString().replace('.', ',');
}

function remove(id) {
  cart.splice(id, 1);

  display();
}

function increase(id) {
  let quantity = document.getElementsByClassName('quantity');
  let int = parseInt(quantity[id].innerText) + 1;

  if(int > 99) {
    int = 99;
  }

  quantity[id].innerText = int.toString();

  total();
}

function decrease(id) {
  let quantity = document.getElementsByClassName('quantity');
  let int = parseInt(quantity[id].innerText) - 1;

  if(int < 1) {
    int = 1;
  }

  quantity[id].innerText = int.toString();

  total();
}

function activate() {
  let remove_button = document.getElementsByClassName('remove-button');
  let plus_button = document.getElementsByClassName('plus-button');
  let minus_button = document.getElementsByClassName('minus-button');

  for(let id = 0; id < plus_button.length; id++) {
    remove_button[id].addEventListener('click', function() {remove(id);});
    plus_button[id].addEventListener('click', function() {increase(id);});
    minus_button[id].addEventListener('click', function() {decrease(id);});
  }
}

function display() {
  let cart_block = document.getElementById('book-list');
  cart_block.innerHTML = '';
  for(let id = 0; id < cart.length; id++) {
    cart_block.innerHTML += `
    <div class="book">
      <div class='remove-button'>
        x
      </div>
      <div class="title-area">
        ${cart[id].name}
      </div>
      <div class="price-area">
        R$ ${cart[id].price}
      </div>
      <div class="quantity-selector-area">
        <button type="button" class="plus-button">
          +
        </button>
        <button type="button" class="quantity">
          1
        </button>
        <button type="button" class="minus-button">
          -
        </button>
      </div>
    </div>
    `
  }

  total();
  activate();
}

let cart = [];
cart.push({name: 'Frankenstein', price: '29,90'});
cart.push({name: 'To Kill a Mocking Bird', price: '44,90'});
cart.push({name: 'Don Quixote', price: '46,88'});
cart.push({name: 'Jane Eyre', price: '35,90'});
cart.push({name: 'Brave New World', price: '21,90'});
cart.push({name: 'Alice in Wonderland', price: '29,90'});
cart.push({name: 'Les Miserables', price: '66,90'});
console.log(cart);
display();
