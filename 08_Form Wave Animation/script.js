const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    // 배열을 나눠 각각의 글자를 
    .split('')
    // 새로운 배열에 넣음.(span을 둘러 글자의 배열을 만듦.)
    .map((letter, idx) => `<span style = "transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('');
})