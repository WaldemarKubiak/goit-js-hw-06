const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElements = document.querySelector("#ingredients");

const listGreens = ingredients.map((ingredient) => {
  const listGreens = document.createElement("li");
  listGreens.textContent = ingredient;
  listGreens.classList.add("item");
  return listGreens;
});

ingredientsElements.append(...listGreens);
