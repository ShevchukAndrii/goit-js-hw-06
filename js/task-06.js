const inputEl = document.querySelector("#validation-input");
const lengthInput = inputEl.getAttribute('data-length')
inputEl.addEventListener('blur', (e) => {
    if (e.target.value.length === Number(lengthInput)) {
        inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")
    }
        else {
            inputEl.classList.add("invalid")
        }
    
})