


// ---------------------------header



// firstSlider
const firstItems = document.querySelectorAll('.firstSlider__item')
const firstPrev = document.querySelector('.firstSlider__btn--prev');
const firstNext = document.querySelector('.firstSlider__btn--next');



function sliderMove(item, prev, next, prevClass, nextClass, activeClass) {
    let left = 0;
    let right = 2;
    let active = 1;
    function deletClass() {
        for (i = 0; i < item.length; i++) {
            item[i].classList.remove(prevClass);
            item[i].classList.remove(nextClass);
            item[i].classList.remove(activeClass);
        }
    }
    next.onclick = function () {
        left++;
        right++;
        active++;
        deletClass()
        item[left].classList.add('firstSlider__item--prev');
        item[right].classList.add('firstSlider__item--next');
        item[active].classList.add('firstSlider__item--active');
        console.log(active)
        if (left === item.length - 1) {
            left = -1;
        } else if (right === item.length - 1) {
            right = -1;
        } else if (active === item.length - 1) {
            active = -1;
        }
    }
    prev.onclick = function () {
        if (left <= 0) {
            left = item.length;
        } else if (right === 0) {
            right = item.length;
        } else if (active === 0) {
            active = item.length;
        }
        left--;
        right--;
        active--;
        deletClass()
        item[left].classList.add('firstSlider__item--prev');
        item[right].classList.add('firstSlider__item--next');
        item[active].classList.add('firstSlider__item--active');
        console.log(active)
    }


}
sliderMove(firstItems, firstPrev, firstNext, 'firstSlider__item--prev', 'firstSlider__item--next', 'firstSlider__item--active') 