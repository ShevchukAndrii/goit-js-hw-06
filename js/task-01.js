const AmountOfLiElem = document.querySelector('#categories').children.length
console.log(`Number of categories: ${AmountOfLiElem}`);



const liElem = document.querySelectorAll('.item');
liElem.forEach(elem => { 
    const textOfH2 = elem.querySelector('h2').textContent;
    console.log(`Category: ${textOfH2}`)
    const numberLiElem = elem.querySelectorAll('li').length;
    console.log(`Elements: ${numberLiElem}`)
});


