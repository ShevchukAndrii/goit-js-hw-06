const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener('input', (e) => {
    if (e.target.value.trim().length === 0) {
        spanEl.textContent = 'Anonymous';
    }
    else {
        spanEl.textContent = e.target.value;
    }
})