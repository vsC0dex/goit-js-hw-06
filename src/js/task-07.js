const scale = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
scale.value = 16
scale.addEventListener('input', () => {
    text.style.fontSize = scale.value + 'px'
})