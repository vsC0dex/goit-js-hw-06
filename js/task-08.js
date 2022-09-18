const formEl = document.querySelector('form')
const inputEl = document.querySelectorAll('label')




formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  if (formEl[0].value.length === 0 || formEl[1].value.length === 0) {
    return alert('Enter email and password, please')
  }
  console.log('email:',event.currentTarget.elements.email.value);
  console.log('password:',event.currentTarget.elements.password.value);
  // const formData = new formData(event.currentTarget);
  // console.log(formData);
  // formData.forEach((email, password) => {
  //   console.log(email);
  //   console.log(password);
  // });
  formEl.reset()
};

