const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')  //arr

// 이미지가 채워진 객체에 적용하는 이벤트(drag를 start(마우스로 집고), end(마우스로 놓고) 한다)
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// 빈 객체들에 적용하는 이벤트
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)   // 마우스 객체 위에 자리잡고 있을 때
    empty.addEventListener('dragenter', dragEnter) // 마우스가 객체 위로 처음 진입할 때 
    empty.addEventListener('dragleave', dragLeave) // 드래그가 끝나서 마우스가 객체 위에서 벗어날 때
    empty.addEventListener('drop', dragDrop)       // 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생(드래그 끝날 때)
}

// 이미지 객체를 마우스로 들어올릴 때 적용(.hold와 invisible 적용)
function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

// 이미지 객체를 특정 객체에 내려놓을 때 적용(이미지가 놓일 객체는 fill 된다)
function dragEnd() {
    this.className = 'fill'
}

// 마우스가 대상 객체의 위에 자리 잡고 있을 때 아무 이벤트도 발생하지 않도록
function dragOver(e) {
    e.preventDefault()
}

// 마우스가 대상 객체의 위로 처음 진입할 때 hoverd 발생
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

// 원래 이미지가 있던 객체에서 마우스가 대상 객체의 위에서 벗어날 때 empty가 적용
function dragLeave() {
    this.className = 'empty'
}

// 이미지를 새로 놓으려는 객체에 놓는 장소에 위치한 객체에서 발생함(empty ➡ fill)
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}