let button = document.getElementById('update');

button.addEventListener('click', function() {
  let input = document.getElementsByTagName('input');

  let id;
  for(id = 0; id < input.length; id++) {
    if(input[id].value == '') {
      alert('Some fields are missing!');
      break;
    }
  }

  console.log(id);
  if(id == input.length) {
    window.location.href = 'update-succeeded.html';
  }

});
