const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const elements = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;

  return liEl;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...elements);

console.log(ingredientsList);
