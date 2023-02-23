### 01_Expanding Cards
💻 주제 : 카드를 눌렀을 때 접혀져있던 카드가 크게 나타남.
- classList의 add, remove 기능을 활용해 패널을 active 상태로 만듦.
- css에서 패널 active를 구현 후 transition으로 유연하게 패널의 크기를 조정함.
### 02_Progress Steps
💻 주제 : Prev와 Next 버튼에 따라 진행 바가 움직임.
- currentActive라는 변수를 만들고 이 변수가 circles.length(길이 4)보다 작으면 currentActive 가 1이 되고, 크면 currentActive = circles.length로 함.
```js
let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++

  if(currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
});

prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1) {
    currentActive = 1
  }

  update()

});
```
- update 함수를 통해 어떤 원이 활성되어야 하는지 classList의 add, remove 기능으로 설정함.
- currentActive가 1일때(완전 초기화) Prev는 버튼이 안 눌리게 disabled로 설정함.
### 03_Rotating Navigation
💻 주제 : 상단 햄버거바를 누르면 화면이 꺾이면서 하단에 내비게이션바가 나타남.
- classList의 add, remove 기능을 활용해 show-nav 기능을 구현함.
### 04_Hidden Search Widget
💻 주제 : 돋보기를 누르면 검색 창이 늘어남.
- 토글 메서드를 통해 버튼을 클릭 시 active라는 클래스를 만들거나 제거할 수 있게 함.
✔️ toggle() <br>
토글이란 add(), remove() 메서드를 한 번에 쓸 수 있음. 보통 click 이벤트에 classList를 이용해 toggle로 css에 style을 준 클래스명을 on/off 함.
### 05_Blurry Loading
💻 주제 : 퍼센트가 100까지 채워지면서 흐릿했던 배경이 점점 선명하게 변함.
- https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
```js
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
```
### 06_Scroll Animation
💻주제 : 화면을 스크롤시 내리는 방향에 따라 content박스가 생기거나 제거됨.
- scroll 메서드를 사용하여 checkBoxes 함수를 실행함.
- Element.getBoundingClientRect() 메서드 사용
- https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect
### 07_Split Landing Page
💻 주제 : 반으로 나뉜 화면에서 마우스 이동 시 화면이 커지고, 버튼에 마우스를 올려두면 버튼 색이 변함.
- mouseenter, mouseleave 메서드를 통해 classList의 add, remove를 실행함.
### 08_Form Wave Animation
💻 주제 : 로그인 양식이지만 입력칸에 마우스를 올려두면 글자가 웨이브로 움직임.
- 각각의 글자를 span으로 묶어 개별적으로 움직이게 함.
```js
labels.forEach(label => {
  label.innerHTML = label.innerText
    // 배열을 나눠 각각의 글자를 
    .split('')
    // 새로운 배열에 넣음.(span을 둘러 글자의 배열을 만듦.)
    .map((letter, idx) => `<span style = "transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('');
})
```
### 09_Sound Board
💻 주제 : 소리 버튼을 누르면 소리가 나옴. 소리가 끝나기 전에 다른 소리 버튼을 누르면 전에 눌렀던 버튼의 소리가 중지됨.

### 10_Dad Jokes
💻 주제 : Fetch API를 통해 버튼을 누르면 무작위로 아재개그가 나옴.
- async & await 비동기처리 
```js
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
```
✔️ other ver.
```js
function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    },
  }


  fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
```