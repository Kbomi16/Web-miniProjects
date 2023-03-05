const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// smallCups의 개수는 총 8개. 인덱스는 0~7. 클릭시 하이라이트 효과를 줄거임.
smallCups.forEach((cup, idx)=> {
  cup.addEventListener('click', () => highlightCups(idx));
})

// 인덱스가 작은 컵들을 통과하는 반복문을 통해 특정 반복문이 클릭한 인덱스보다 작거나 같은지 확인.
function highlightCups(idx) {
  // smallCups의 배열에서 현재 인덱스(클릭한 인덱스)를 확인하고 배열 목록에서 클릭한 인덱스를 포함하고 있는지 확인한다.(contains 메서드)
  // 특정 클래스를 확인할 때 full을 포함하는지 확인하고 다음 인덱스가 full을 포함하지 않는지도 확인한다.
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;

  }

  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  })

  updateBigCup();
}

function updateBigCup() {
  // 채워진 작은 컵의 개수를 fullCups라는 변수에 선언.
  const fullCups = document.querySelectorAll('.cup-small.full').length;

  const totalCups = smallCups.length;

  if(fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups *100}%`;
  }

  // 컵이 다 차면 remained 글자가 없어져야 함.
  if(fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    // 아직 채워야 하는 리터양을 보여줌.
    liters.innerText = `${2 - (250 * fullCups / 1000)}`;
  }

}