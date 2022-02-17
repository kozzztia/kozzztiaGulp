
const headerCall = document.querySelector('.header__call');
const navHeader = document.querySelector('.nav');
const burger = document.querySelector('.burger');


// ---------------------------header

burger.onclick = () => {
    navHeader.classList.toggle('nav--active')
}

