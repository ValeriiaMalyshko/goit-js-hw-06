const dekrBtn = document.querySelector("[data-action='decrement']") ;
const inkrBtn = document.querySelector("[data-action='increment']");
let valueEl = document.querySelector('#value');
let counterValue = 0;
dekrBtn .addEventListener("click", function() {
    counterValue -= 1 ;
    valueEl.textContent = counterValue;
  });
inkrBtn.addEventListener("click", function() {
    counterValue += 1 ;
    valueEl.textContent = counterValue;
  
  });