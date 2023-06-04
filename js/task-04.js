let counterValue = 0;
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value');
decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
})
incrementBtnEl.addEventListener('click', () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
})
