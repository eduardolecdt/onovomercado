// JS nav INDEX

const body = document.body
const menu = document.querySelector('nav .menu')
const menuOpcoes = document.querySelector('nav .menu_opcoes')
const abrirMenu = document.querySelector('nav .menu img.abrir')
const fecharMenu = document.querySelector('nav .menu img.fechar')

abrirMenu.onclick = () => {
  menu.classList.add('mostrar')
  menuOpcoes.classList.add('mostrar')
  body.classList.add('menu_aberto')
}

fecharMenu.onclick = () => {
  menu.classList.remove('mostrar')
  menuOpcoes.classList.remove('mostrar')
  body.classList.remove('menu_aberto')
}
