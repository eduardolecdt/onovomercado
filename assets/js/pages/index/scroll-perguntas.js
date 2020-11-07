// Scroll com Mouse

const sectionPerguntas = document.querySelector('section[name="perguntas"]')
const divItens = sectionPerguntas.querySelector('.itens')

let ativado = false
let coordenadaXInicial
let rolagemParaEsquerda

divItens.addEventListener('mousedown', (evento) => {
  ativado = true

  coordenadaXInicial = evento.pageX - divItens.offsetLeft
  rolagemParaEsquerda = divItens.scrollLeft
})

divItens.addEventListener('mouseleave', () => {
  ativado = false
  divItens.classList.remove('drag')
})

divItens.addEventListener('mouseup', () => {
  ativado = false
  divItens.classList.remove('drag')
})

divItens.addEventListener('mousemove', (evento) => {
  if (!ativado) return
  evento.preventDefault()

  const coordenadaX = evento.pageX - divItens.offsetLeft
  const distancia = (coordenadaX - coordenadaXInicial) * 2
  divItens.scrollLeft = rolagemParaEsquerda - distancia
  divItens.classList.add('drag')
})

