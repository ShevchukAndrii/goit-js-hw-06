const formEl = document.querySelector('.login-form');
const data = {};


formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const {
    elements: { email, password }
  } = e.currentTarget;


     if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
     }
     else {
         data.password = password.value;
         data.email = email.value;
         console.log(data);
         e.currentTarget.reset();
    }
})
