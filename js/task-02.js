const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('ul#ingredients')

const elements = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = ingredient;
  return listEl;
});

console.log(elements);

listIngredientsEl.append(...elements);

