const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0 //현재 보여지는 이미지 인덱스 번호

let interval = setInterval(run , 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  //X축으로 500px만큼 이동하여 전환 효과를 줌
  if(idx > img.length - 1) {
    idx = 0
  } else if(idx < 0) {
    idx = img.length - 1
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
})
rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})