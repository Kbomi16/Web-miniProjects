const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = '만족'

ratingsContainer.addEventListener('click', (e) => {
  //e로 설정하면 클릭된 요소를 나타냄(e.target)
  //rating 클래스(부모) 안에 있는 img를 얻어야 하기 때문에 parentNode를 씀
  if(e.target.parentNode.classList.contains('rating')) {
    removeActice()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

function removeActice() {
  for(let i=0; i<ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>감사합니다!</strong>
    <br>
    <strong>의견 : ${selectedRating}</strong>
    <p>고객 지원 향상을 위해 귀하의 의견을 반영하도록 하겠습니다.</p>
  `
})