const name = document.getElementById('name');
const passord = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener(submit,(e) =>{
    let messages = [];
    if(name.value === ' '|| name.vaule == null){
        messages.push('Name is required');
    }
    if(password.value.length <= 6){
        messages.push('Password must be longer than 6 characters');
    }
    

})