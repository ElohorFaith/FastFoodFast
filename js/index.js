function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
function runModal() {
var modal = document.querySelector('.cart-modal');
    modal.style.display = 'block';
}

function closeModal() {
var modal = document.querySelector('.cart-modal');
    modal.style.display = 'none';
}