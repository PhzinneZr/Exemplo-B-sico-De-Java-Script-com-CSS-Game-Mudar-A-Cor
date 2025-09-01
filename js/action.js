var div = document.getElementById("box");

if(localStorage.getItem('cookie') != null){
    let bg = localStorage.getItem('cookie');
    div.style.backgroundColor = bg;
}

function muda_acor(hex){
    div.style.backgroundColor = (hex);
    localStorage.setItem('cookie', hex);
}