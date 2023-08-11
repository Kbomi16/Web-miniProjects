const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

form.addEventListener('submit', (e) => {
  // 이벤트 개체를 예지해 기본값 호출 방지
  e.preventDefault()

  addTodo()
})

function addTodo(todo) {
  // input에 입력된 value값을 todoText에 저장
  let todoText = input.value

  if(todo) {
    todoText = todo.text
  }

  if(todoText) {
    const todoEl = document.createElement('li')
    if(todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText

    todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'))
    // 오른쪽클릭
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      todoEl.remove()
      updateLS()
    })

    todosUL.appendChild(todoEl)

    input.value=''

    updateLS()
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li')

  const todos = []

  todosEl.forEach(todoEl => {
      todos.push({
          text: todoEl.innerText,
          completed: todoEl.classList.contains('completed')
      })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}

// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(localStorage.getItem(obj))
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
  todos.forEach(todo => addTodo(todo));
}

