const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
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

    setTimeout(() => circle.remove(), 500);
  })
})