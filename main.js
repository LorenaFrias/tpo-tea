let hamburger = document.getElementById('hamburger');
let navUl = document.querySelector('.navbar');
let icon = hamburger.querySelector('.fa-bars');

hamburger.addEventListener('click', ()=> {
    navUl.classList.toggle('show');
    if (icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars")
    }
})