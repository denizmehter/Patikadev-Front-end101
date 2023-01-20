let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', eventHandler)
let alarm = document.querySelector('#alert');
const ALERT = (message, sinif) => `<span class="alert alert-${sinif} alert-dismissible fade show" role="alert">${message}
</span>`

let deleteDOM = document.querySelector('#delete');
deleteDOM.addEventListener('click', clickeventHandler);

function clickeventHandler(){
    let listDOM = document.querySelector('#user_list');
    let sayı = listDOM.childElementCount;
    let checkDOM = document.querySelectorAll('.form-check-input')
    for (let i = 0; i < sayı; i++) {
        if (checkDOM[i].checked) {
            listDOM.removeChild(listDOM.children[i]);
        }
    }
    alarm.innerHTML = ALERT("Not Silindi", "danger");
}

function eventHandler(event){
    event.preventDefault();
    let user_name = document.querySelector('#full_name');
    if (user_name.value) {
        addItem(user_name);
        user_name.value = "";
        alarm.innerHTML = ALERT("Not Eklendi","success");
    }
    else {
        alarm.innerHTML = ALERT("Not Alanını Doldurun", "warning");
    }
}

let addItem = (isim) => {
    const list = document.querySelector('#user_list');
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `<input class="form-check-input me-3" type="checkbox" value="">${isim.value}`;
    liDOM.classList.add("list-group-item");
    list.appendChild(liDOM);
}

