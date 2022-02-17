

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const links = document.querySelectorAll('.nav__link');
const banerBtn = document.querySelector('.baner__btn');
const popup = document.querySelector('.popup');
const popupWrapper = document.querySelector('.popup__wrapper');
const callBack = document.querySelector('.header__call');


// ---------------------------header

burger.onclick = () => {
    nav.classList.toggle('header__nav--active');
    for (i = 0; i < links.length; ++i) {
        links[i].classList.toggle('nav__link--active');
        links[i].style.transition = `.${i}s`;
    }
    nav.addEventListener('mouseup', () => {
        nav.classList.remove('header__nav--active');
        for (i = 0; i < links.length; ++i) {
            links[i].classList.remove('nav__link--active');
        }
    })
}
// --------------------------------popups
const sendForm = () => {
    popup.classList.add('popup--active');
    popupWrapper.classList.add('popup__wrapper--active');
    window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            popup.classList.remove('popup--active');
            popupWrapper.classList.remove('popup__wrapper--active');
        }
    })
}
banerBtn.onclick = sendForm;
callBack.onclick = sendForm;

