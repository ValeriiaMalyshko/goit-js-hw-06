const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsLisEl = document.querySelector('#ingredients') ;
const makeIngredientsList = ingredients => {
  return ingredients.map (ingredient=> {
    const itemEl= document.createElement('li') ;
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;
    return itemEl ;

  });
}

ingredientsLisEl.append(...makeIngredientsList(ingredients));
