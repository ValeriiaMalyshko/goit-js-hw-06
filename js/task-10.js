function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector (`[type="number"]`) ;
const createBtn = document.querySelector (`[data-create]`) ;
const destroyBtn = document.querySelector (`[data-destroy]`) ;
const box = document.querySelector ("#boxes") ;
let amount = 0;
input.addEventListener ("input", onInput) ;
function onInput(event) {
  amount=event.target.value;
};

createBtn.addEventListener ("click", onCreateBtn) ;
function onCreateBtn () {
  for (let i=1; i <= amount; i+=1) {
    const divEl= document.createElement("div") ;
    divEl.classList.add('box__item');
    box.append(divEl) ;
    // document.querySelector('box__item').textContent = i;
    document.querySelector('box__item').style.background= `${getRandomHexColor()}`;
    document.querySelector('box__item').style.width= `${20+(i * 10)}px`;
    document.querySelector('box__item').style.height= `${20+(i * 10)}px`;
  }
} ;
destroyBtn.addEventListener ("click", onDestroyBtn) ;
function onDestroyBtn () {
  for (let i=1; i <= amount; i+=1) {
    document.querySelector('box__item').remove() ;
  }
  input.value=0;
};

