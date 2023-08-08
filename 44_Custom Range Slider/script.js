const range = document.getElementById('range')

range.addEventListener('input', (e) => {
  // 숫자로 변환하기 위해 앞에 +를 붙임
  // e.target은 input
  const value = +e.target.value
  // e.target의 다음 형제는 label임
  const label = e.target.nextElementSibling

  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  const label_width = getComputedStyle(label).getPropertyValue('width')

  //2는 p,x
  const num_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.substring(0, label_width.length - 2)

  const max = +e.target.max
  const min = +e.target.min

  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
  label.style.left = `${left}px`


  label.innerHTML = value
})


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
