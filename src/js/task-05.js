const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output')
}

console.log(refs.input);

refs.input.addEventListener('input', onInputRename)

function onInputRename(event) {
  refs.span.textContent = event.currentTarget.value
  if (event.currentTarget.value === "") {
    refs.span.textContent = 'Anonymous'
  }
}