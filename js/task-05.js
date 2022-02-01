let inEl = document.querySelector('#name-input') ;
inEl.addEventListener('input', inputChange);
let outEl = document.querySelector('#name-output') ;

function inputChange() {
    if (inEl.value === '') {
       outEl.textContent = 'Anonymous';
    } else{
    outEl.textContent = inEl.value;
    } 
}