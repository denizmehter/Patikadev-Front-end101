let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', eventHandler)
let alarm = document.querySelector('#alert');
const ALERT = (message) => `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>${message}</strong> 
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function eventHandler(event){
    event.preventDefault();
    let user_name = document.querySelector('#full_name');
    let user_mail = document.querySelector('#email');
    if (user_mail.value && user_name.value) {
        addItem(user_name,user_mail);
        user_name.value = "";
        user_mail.value = "";
    }
    else {
        alarm.innerHTML = ALERT("Eksik Alanları Doldurunuz!");
    }
}

let addItem = (isim,mail) => {
    const list = document.querySelector('#user_list');
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${isim.value} - ${mail.value}`
    liDOM.classList.add(`list-group-item`)
    list.appendChild(liDOM);
}