const items = document.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
