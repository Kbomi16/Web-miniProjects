const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9) {
      codes[idx].value=''
      // 숫자 입력 후, 다음 코드로 입력하게 커서가 바뀔 것임
      setTimeout(() => codes[idx + 1].focus(), 10 )
    } else if(e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10 )
    }
  })
})