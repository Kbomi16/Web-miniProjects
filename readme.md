### ⭐참고⭐
##### 1. font awesome
```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
```

##### 2. 사용자 지정 CSS
- root로 색을 지정하고 var()로 적용시킬 수 있음.
```css
:root {
  --border-color: #144fc6;
}
.cup {
  border: 4px solid var(--border-color);
}
```

##### 3. Position 속성
값|의미
-------|-------
static|기준없음(배치 불가능, 기본값)
relative|요소 자기 자신을 기준으로 배치
absolute|부모 요소를 기준으로 배치
fixed|뷰포트 기분으로 배치
stickey|스크롤 영역 기준으로 배치

##### 4. 가상요소
✔️::before <br/>
첫 번째 가상 요소를 생성함.
```css
p::before {
  content : '♥';
}
/* 결과는 p단락 앞에 하트 이모티콘이 붙여짐. */
```
✔️::after <br/>
마지막 가상 요소를 생성함.
```css
p::after {
  content : '♥';
}
/* 결과는 p단락 뒤에 하트 이모티콘이 붙여짐. */
```
❗두 속성을 쓸 때 content:''를 추가해야 한다.

##### 5. 메서드 toggle() 
토글이란 add(), remove() 메서드를 한 번에 쓸 수 있음. 보통 click 이벤트에 classList를 이용해 toggle로 css에 style을 준 클래스명을 on/off 함.

##### 6. transform, translate, transition 차이
❗transform<br/>
- Element를 변경시킬 때 사용 ( 위치 이동 , 회전 , 크기 조절 등 )
- transform 내 사용 : translate , scale , rotate 등
❗translate<br/>
- Element를 이동시킬 때 사용
- X축이나 Y축 기준으로 한 값만 적용시키고 싶을 때는 translateY , translateY를 사용하던가 translate에서 원하지 않는 값에 0을 사용해도 된다.
❗transition<br/>
- Element의 CSS 속성을 변경할 때 부드럽게 움직이거나 원하는 대로 적용되도록 애니메이션 속도, 반복 횟수, 조절 등을 할 수 있다.

##### 7. transform : scale()
- scale 문단의 박스 크기는 그대로 가지고 있지만 item의 크기가 바뀐다.
- scale 사용 시 가로 세로 사이즈가 0.5로 변경
- scale을 1로 사용시에는 원래 크기로 변경
- 앞쪽의 인자가 x축 뒷쪽의 인자가 y축
- x축만 늘릴고 싶을때는 scaleX()를 사용
- Y축만 늘릴고 싶을때는 scaleY()를 사용



<hr>

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
<br> ✔️ toggle() <br>

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

### 11_Event KeyCodes
💻 주제 : 키보드 키를 눌렀을 때 키 버튼과 키코드를 보여줌.
- keydown 메서드 사용.
```js
window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
      ${event.key === ' ' ? 'Space' : event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `;
})
```

### 12_FAQ Collapse
💻 주제 : 접혀있던 질문지를 선택했을 때 카드가 아래로 확장됨.
-  font-awesome을 통해 유니코드로 이모지를 받아옴.
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
```css
content: '\f075';
```
- querySelectorAll로 토글 버튼 가져오기
- 노드 목록을 이용해 반복문을 통과하고 각각의 토글에는 이벤트를 추가함.(클릭이벤트)
- 부모 클래스 토글(active 클래스)
```js
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  })
})
```

### 13_Random Choice Picker
💻 주제 : 입력란에 단어를 입력하면 하단에 태그가 생김. 콤마(,)를 통해 여러 개의 태그를 만들 수 있음.
- 무작위로 하이라이트를 넣을 태그를 고름.
- classList의 add, remove로 하이라이트를 준다.

### 14_Animated Navigation
💻 주제 : 네비게이션 바의 X를 누르면 네비바가 줄어들면서 햄버거 바로 전환된다.
- rotate를 활용한 css가 많음.
- toggle 메서드를 이용해 active 클래스를 붙이거나 제거하여 네비 바에 애니메이션을 적용함.

### 15_Incrementing Counter
💻 주제 : 숫자 증감 + 반응형 페이지
- 초기 counter 값은 0<br/>
❗아래 결과 값은 string ${target값}으로 나온다.
```js
const target = counter.getAttribute('data-target');
console.log(typeof target, target);
```
❗counter 앞에 parseInt나 +기호를 붙이면 number로 type이 바뀐다.
```js
const target = +counter.getAttribute('data-target');
console.log(typeof target, target);
```
- c가 target이 되기전에는 counter가 올라가고 target지점에 도달 시 숫자 증가가 멈춤.
```js
if(c < target) {
      // ceil : 반올림 메서드
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
```

### 16_Drink Water
💻 주제 : 물병을 클릭하면 큰 물병 안에 물이 채워진다.
- Small 컵을 클릭시 Big 컵에 물이 담긴다.
```js
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
```
```js
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
```

### 17_Movie App
💻 주제 : API를 활용한 영화 소개 페이지.
- TMDB의 API를 사용해 영화 제목, 등급, 이미지가 있는 영화 데이터베이스를 받는다.
<br/>❗ https://www.themoviedb.org/settings/api
- UI(HTML, CSS)를 만들고, API 키를 IMDB 서비스에 등록한다.
- JavaScript를 추가해 Fetch 요청을 만들어 당시 가장 인기 있었던 영화를 보여줄 데이터를 얻는다.
- 8 이상 : 초록 | 5 ~ 8 : 주황 | 5 이하 : 빨강
- 검색기능을 통해 제목 검색 가능

### 18_Background Slider
💻 주제 : 이미지를 슬라이드 하면 배경화면의 이미지가 함께 변경된다.
- 오른쪽, 왼쪽 버튼에  click 메서드를 추가해 이미지가 반복되도록 함.
- setBgToBody() 함수를 만들어 해당 슬라이드 이미지가 배경 이미지와 같도록 설정.
```js
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
```
- classList의 add, remove 기능으로 active 클래스 활성, 비활성화

### 19_Theme Clock
💻 주제 : 현재시각을 보여주고 시계바늘이 움직이는 시계 + 다크모드
- x축으로 -50%, y축으로-100% 까지 이동시키고 회전 시킬거임.
```css
  transform: translate(-50%, -100%) rotate(0deg);
```
❗transform<br/>
- Element를 변경시킬 때 사용 ( 위치 이동 , 회전 , 크기 조절 등 )
- transform 내 사용 : translate , scale , rotate 등
❗translate<br/>
- Element를 이동시킬 때 사용
- X축이나 Y축 기준으로 한 값만 적용시키고 싶을 때는 translateY , translateY를 사용하던가 translate에서 원하지 않는 값에 0을 사용해도 된다.
❗transition<br/>
- Element의 CSS 속성을 변경할 때 부드럽게 움직이거나 원하는 대로 적용되도록 애니메이션 속도, 반복 횟수, 조절 등을 할 수 있다.
- dark 클래스를 만들어 add, remove로 다크모드와 라이트모드로 변경할 수 있음.
- 시계는 360도 회전하기 때문에 0~360까지 매핑(시는 12, 분은 60, 초는 60)
```js
hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
```

### 20_Button Ripple Effect
💻 주제 : 버튼 클릭시 마우스 포인터에 파급 효과를 줌.
```js
 // 클릭한 곳의 좌표
    const x = e.clientX;
    const y = e.clientY;

    // 버튼 내에서만 적용되어야 하기 때문에 버튼의 위치를 적용함.
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // 버튼 내에서 클릭했을 떄 좌표
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    // this를 사용할 때는 화살표 함수가 아닌 일반 함수 형태로 써야 함.
    this.appendChild(circle);
```

### 21_Darg N Drop
💻 주제 : 이미지를 정사각형 박스에 드래그 앤 드롭을 할 수 있음.
- draggable: true로 설정해 드래그가 가능하도록 함.
💡 draggable 속성<br>
웹 페이지 내의 모든 요소는 draggable 속성을 사용하여 드래그될 수 있는 객체(draggable object)로 변환될 수 있다.
- dragOver, dragEnter, dragLeave, dragDrop 함수를 생성.
💡 event<br>
`dragstart` 사용자가 객체(object)를 드래그하려고 시작할 때 발생함.<br>
`dragenter` 마우스가 대상 객체의 위로 처음 진입할 때 발생함.<br>
`dragover` 드래그하면서 마우스가 대상 객체의 위에 자리 잡고 있을 때 발생함.<br>
`drag` 대상 객체를 드래그하면서 마우스를 움직일 때 발생함.<br>
`drop` 드래그가 끝나서 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생함.<br>
`dragleave` 드래그가 끝나서 마우스가 대상 객체의 위에서 벗어날 때 발생함.<br>
`dragend` 대상 객체를 드래그하다가 마우스 버튼을 놓는 순간 발생함.

### 22_Drawing App
💻 주제 : 캔버스 요소를 사용한 드로잉. <br>
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

### 23_Kinetic CSS Loader
💻 주제 : 두 개의 삼각형이 돌아가는 로딩화면
- keyframe을 사용해 정한 너비안에서 삼각형이 돌아가도록 함.<br>
https://www.w3schools.com/cssref/css3_pr_animation-keyframes.php 

### 24_Content Placeholder
💻 주제 : 카드 로드 전에 로딩 화면 만들기
- animated 클래스가 붙은 것은 로딩화면임.
- classList의 add, remove 기능을 활용해 animated 상태로 만듦.

### 25_Sticky Navbar
💻 주제 : 