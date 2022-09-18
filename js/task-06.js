const inputRef = document.querySelector('#validation-input');
const correctInputLength = document.querySelector('[data-length]')
const coorectInputLengthToNumber = Number(correctInputLength.attributes[2].textContent)


inputRef.addEventListener('blur', () => {
  if (inputRef.value.length === coorectInputLengthToNumber) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    return inputRef.classList.add('invalid')
  }
});

