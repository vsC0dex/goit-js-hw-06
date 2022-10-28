const inputValidEl = document.querySelector("#validation-input");

inputValidEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputValidEl.classList.remove("valid");
  inputValidEl.classList.remove("invalid");
  const value = `${event.currentTarget.value}`.trim();
  const quantity = Number(inputValidEl.dataset.length);

  if (value.length === quantity) {
    inputValidEl.classList.add("valid");
  } else inputValidEl.classList.add("invalid");
}
