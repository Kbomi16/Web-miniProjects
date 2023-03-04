const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  // 초기 counter 값은 0
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 200;

    if(c < target) {
      // ceil : 반올림 메서드
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  }
  updateCounter();
})