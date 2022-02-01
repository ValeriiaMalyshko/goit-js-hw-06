function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector ('[type="number"]') ;
console.log (input)
const createBtn = document.querySelector ('[data-create]') ;
console.log (createBtn)
const destroyBtn = document.querySelector ('[data-destroy]') ;
console.log (destroyBtn)
const box = document.querySelector ("#boxes") ;
console.log (box)
let amount = 0;
input.addEventListener ("input", onInput) ;
function onInput(event) {
  amount=event.currentTarget.value;
};

createBtn.addEventListener ("click", onCreateBtn) ;
function onCreateBtn () {
  for (let i=0; i < amount; i+=1) {
    const bgColor = getRandomHexColor();
    const divEl= document.createElement("div") ;
    divEl.style.backgroundColor = bgColor;
    divEl.style.width = 20 + i*10 + "px";
    divEl.style.height = 20 + i*10 + "px";
    box.append(divEl) ;
  }
} ;
destroyBtn.addEventListener ("click", onDestroyBtn) ;
function onDestroyBtn () {
  boxes.innerHTML = "";
  input.value=0;
};

