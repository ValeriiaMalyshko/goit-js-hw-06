
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorEl = document.querySelector (".color") ;
const changeEl = document.querySelector (".change-color") ;
changeEl.addEventListener ("click", changeBackground) ;
function changeBackground() {
  let color = getRandomHexColor() ;
  colorEl.textContent =  `${color}`;
  document.body.style.backgroundColor = `${color}`;
}

