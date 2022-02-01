const inputEl = document.querySelector('input');

inputEl.addEventListener ('blur', onInputChange);
function onInputChange (event) {
    const valueLength = event.currentTarget.value.length ;
    const requiredLength = inputEl.dataset.length ;
    if (valueLength == requiredLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};