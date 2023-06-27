const container = document.getElementById('container')
const colors = ['#FFACAC', '#40128B', '#79E0EE', '#FFEA20', '#82CD47']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
  const sqaure = document.createElement('div')
  sqaure.classList.add('square')

  sqaure.addEventListener('mouseover', () => setColor(sqaure))
  sqaure.addEventListener('mouseout', () => removeColor(sqaure))

  container.appendChild(sqaure)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}