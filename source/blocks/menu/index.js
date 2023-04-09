document.addEventListener('DOMContentLoaded', function () {

  let menu = document.querySelector('.menu');
  let button = document.querySelector('.menu__button')

  button.onclick = function () {
    menu.classList.toggle('menu--open');
  }
})

