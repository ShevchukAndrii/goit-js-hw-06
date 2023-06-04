const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liEl = [];
ingredients.forEach((elem) => {
  const li = document.createElement('li');
  li.textContent = elem;
  li.classList.add('item');
  liEl.push(li);
  
})
// console.log(liEl)
const ulEl = document.querySelector('#ingredients');
ulEl.append(...liEl);