let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', eventHandler)
let alarm = document.querySelector('#alert');
const ALERT = (title, message, sinif=warning) => `<div class="alert alert-${sinif} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
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
        alarm.innerHTML = ALERT("Başarılı!","Bilgiler Kaydedildi","success");
    }
    else {
        alarm.innerHTML = ALERT("Eksik Bilgi","Eksik Alanları Doldurunuz!","danger");
    }
}

let addItem = (isim,mail) => {
    const list = document.querySelector('#user_list');
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${isim.value} - ${mail.value}`
    liDOM.classList.add(`list-group-item`)
    list.appendChild(liDOM);
}