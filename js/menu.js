const active = document.querySelector('.cabecalho__menu')
const barra = document.querySelector('.menu-lateral')
active.addEventListener("click", function () {
    barra.classList.toggle('menu-lateral-ativo')
})