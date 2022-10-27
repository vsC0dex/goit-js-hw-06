const inputValidEl = document.querySelector("#validation-input");

inputValidEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputValidEl.classList.remove("valid");
  inputValidEl.classList.remove("invalid");
  const value = `${event.currentTarget.value}`.trim();

  if (value.length === 6) {
    inputValidEl.classList.add("valid");
  } else inputValidEl.classList.add("invalid");
}
