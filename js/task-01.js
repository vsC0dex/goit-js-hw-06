const items = document.querySelectorAll("li.item");

console.log("Number of categories:", items[0].parentElement.childElementCount);

for (let elem of items) {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
}
