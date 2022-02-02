const inputEl = document.querySelector('input');
const valueEl = document.querySelector('data-length');

inputEl.addEventListener ('blur', onInputChange);
function onInputChange (event) {
    const valueLength = event.currentTarget.value.length ;
    const requiredLength = +inputEl.dataset.length ;
    // console.log(requiredLength);
    if (valueLength === requiredLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};