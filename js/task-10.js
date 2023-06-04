function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divElem = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector("input");
let a 
inputEl.addEventListener('blur', (e) => {
  a = e.target.value;
})

const createBoxes = (amount) => {
  
  const array = []
  let width = 20;
  for (let i = 1; i <= amount; i += 1){
    const color = getRandomHexColor();
    const divEl = document.createElement('div');
    width += 10;
    divEl.style.width = `${width}px`;
    divEl.style.height = `${width}px`;
    divEl.style.backgroundColor = color;
    divEl.style.marginTop = '10px';
    array.push(divEl);
    divElem.prepend(...array);
  }
}

const destroyBoxes = () => {
  divElem.innerHTML=(' ');
  
}
createBtn.addEventListener('click', () => {
  createBoxes(a);
  a = 0;
})
destroyBtn.addEventListener('click', destroyBoxes)


