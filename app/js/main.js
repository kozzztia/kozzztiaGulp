// const form = document.getElementById('form');
// function checkedFormValue(event) {
//     event.preventDefault();
//     const name = form.querySelector('[name = "name"]')
//     const age = form.querySelector('[name = "age"]')
//     const people = form.querySelector('[name = "people"]')
//     const plan = form.querySelector('[name = "plan"]')
//     const values = {
//         name: name.value,
//         age: age.value,
//         people: people.checked,
//         plan: plan.value,

//     }
//     console.log(values)
// }
// form.addEventListener('submit', checkedFormValue)

// ---------------------------------------------

// const form = document.getElementById('form');
// const ifCheckOrRadio = type => ['checkbox' , 'radio'].includes(type)
// function sendFormValue(event) {
//     event.preventDefault();
//     const fields = document.querySelectorAll('input , select, textarea');
//     const values ={}
//     fields.forEach((field) =>{
//         const {name, value , type , checked} = field;
//         values[name] = ifCheckOrRadio(type) ? checked :value;
//     })
//     console.log(values)
// }

// form.addEventListener('submit', sendFormValue);

// ------------------------------------
// const {form} = document.forms;

// function sendFormValue(event) {
//     event.preventDefault();
//     const {name, age , people , plan } = form;

//     const values = {
//         name: name.value,
//         age: age.value,
//         people: people.checked,
//         plan: plan.value,
//     }
//     console.log(values);
// }

// form.addEventListener('submit', sendFormValue);

// ------------
// const {form} = document.forms;
// const ifCheckOrRadio = type => ['checkbox' , 'radio'].includes(type)

// function sendFormValue(event) {
//     event.preventDefault();
//     const {elements} = form;
//     const values = {};
//     for (let i = 0; i < elements.length; i++) {
//         const formElement = elements[i];
//         const {name} = formElement;
//         if(name) { 
//             const {value , type, checked} = formElement;
//             values[name] = ifCheckOrRadio(type)?checked : value; 
//         }
//     }
//     console.log(values);
// }
    
// form.addEventListener('submit', sendFormValue);

// -----------------------------------такое

// const {form} = document.forms;

// function sendFormValue(event) {
//     event.preventDefault()

//     const formData = new FormData(form);
//     const values = Object.fromEntries(formData.entries());
//     console.log(values) 
// }

// form.addEventListener('submit', sendFormValue);

// ----------------------------------

const {form} = document.forms;
const ifCheckOrRadio = type => ['checkbox' , 'radio'].includes(type)
function sendFormValue(event) {
    event.preventDefault();
    const values ={};
    for (let field of form){
        const{name} = field;
        if(name){
            const {type, checked, value} = field;
            values[name] = ifCheckOrRadio(type)? checked : value;
        }
    }
    console.log(values)
}

form.addEventListener('submit', sendFormValue);