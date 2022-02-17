

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const links = document.querySelectorAll('.nav__link');


// ---------------------------header

burger.onclick = () => {
    nav.classList.toggle('header__nav--active');
    for (i = 0; i < links.length; ++i) {
        links[i].classList.toggle('nav__link--active');
        links[i].style.transition = `.${i}s`;
    }
}
nav.addEventListener('mouseup', () => {
    nav.classList.remove('header__nav--active');
    for (i = 0; i < links.length; ++i) {
        links[i].classList.remove('nav__link--active');
    }
})

