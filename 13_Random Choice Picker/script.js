const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// 텍스트 영역 : 페이지로 가면 자동으로 커서가 나오고 입력할 수 있음.
textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if(e.key === 'Enter') {
      setTimeout(() => {
          e.target.value = ''
      }, 10)

      randomSelect()
  }
})

function createTags(input) {
  // 태그를 쉼표로 나눔.
  // 빈칸이 추가되지 않도록 trim 함수를 씀.
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  
  tagsEl.innerHTML = ''

  tags.forEach(tag => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
      const randomTag = pickRandomTag()

if (randomTag !== undefined) {
      highlightTag(randomTag)

      setTimeout(() => {
          unHighlightTag(randomTag)
      }, 100)
}
  }, 100);

  setTimeout(() => {
      clearInterval(interval)

      setTimeout(() => {
          const randomTag = pickRandomTag()

          highlightTag(randomTag)
      }, 100)

  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}