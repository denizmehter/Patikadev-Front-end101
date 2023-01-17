let userName = prompt("Lütfen adınızı giriniz:")
let myName= document.querySelector("#myName")

if(userName <= 0){
    alert("Bu kısım boş bırakılamaz!")
    location.reload();
} else {
    myName.innerHTML = `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`
}

function time() {
    let date = new Date();
    let final_date;
    final_date = date.toLocaleString("tr-TR");
    switch(date.getDay()){
        case 0:
            final_date += " Pazar"
            break;
        case 1:
            final_date += " Pazartesi"
            break;
        case 2:
            final_date += " Salı"
            break;
        case 3:
            final_date += " Çarşamba"
            break;
        case 4:
            final_date += " Perşembe"
            break;
        case 5:
            final_date += " Cuma"
            break;
        case 6:
            final_date += " Cumartesi"
            break;
    }
    document.getElementById('myClock').innerHTML = final_date;
}
setInterval(time,1000)