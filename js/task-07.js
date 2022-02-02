const inputEl = document.querySelector('input');

let font = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

inputEl.addEventListener('input', onInputChange) ;

function onInputChange () {
    text.style.fontSize = font.value + "px";
}