const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liValue = ingredients.map(el => {
  const liCreate = document.createElement('li');
  liCreate.textContent = el
  liCreate.classList.add('item');
  return liCreate
});


const ingridientsEl = document.querySelector('#ingredients')
ingridientsEl.append(...liValue)

// const list = document.querySelector('#ingredients')

// const markup = ingredients
// .map((item => `<li class="item"> ${item} </li>`))
// .join('')
// list.insertAdjacentHTML("beforeend", markup)


