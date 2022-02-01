const inputEl = document.querySelector('input');

let font = document.getElementById("font-size-control");
let text = document.getElementById("text");

inputEl.addEventListener('input', onInputChange) ;

function onInputChange () {
    text.style.fontSize = font.value + "px";
}