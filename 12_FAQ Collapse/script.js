// 1. querySelectorAll로 토글 버튼 가져오기
// 2. 노드 목록을 이용해 반복문을 통과하고 각각의 토글에는 이벤트를 추가함.(클릭이벤트)
// 3. 클래스 토글(active 클래스)

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  })
})