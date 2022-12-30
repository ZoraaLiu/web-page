const uname = document.getElementById('uname');
const upass = document.getElementById('upass');
const form = document.getElementById('form');

form.addEventListener(submit,(e) =>{
    let messages = [];
    if(uname.value === ' '|| uname.vaule == null){
        messages.push('Name is required');
    }
    if(upass.value === ' '|| upass.vaule == null){
        messages.push('Password is required');
    }
    if(password.value.length <= 6){
        messages.push('Password must be longer than 6 characters');
    }
})