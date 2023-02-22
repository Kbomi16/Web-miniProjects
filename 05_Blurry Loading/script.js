const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// 0.03초마다 blurring 함수 실행
let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if(load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  // opacity 투명도 조절은 1에서 0으로 가야함.(희미(1) -> 선명(0))
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}