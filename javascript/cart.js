let plus_button = document.getElementsByClassName('plus-button');
let quantity = document.getElementsByClassName('quantity');
let minus_button = document.getElementsByClassName('minus-button');
let price = document.getElementsByClassName('price-area');
let total_price = document.getElementById('total-price');

function increase(id) {
  let int = parseInt(quantity[id].innerText) + 1;

  if(int > 99) {
    int = 99;
  }

  quantity[id].innerText = int.toString();

  total();
}

function decrease(id) {
  let int = parseInt(quantity[id].innerText) - 1;

  if(int < 1) {
    int = 1;
  }

  quantity[id].innerText = int.toString();

  total();
}

for(let id = 0; id < quantity.length; id++) {
  plus_button[id].addEventListener('click', function() {increase(id);});
  minus_button[id].addEventListener('click', function() {decrease(id);});
}

function total() {
  let float = 0.0;
  for(let id = 0; id < price.length; id++) {
    float += parseFloat(price[id].innerText.replace('R$', '').replace(',','.')).toFixed(2) *
    parseInt(quantity[id].innerText);
  }

  total_price.innerText = 'R$ ' + float.toFixed(2).toString().replace('.', ',');
}

total();
