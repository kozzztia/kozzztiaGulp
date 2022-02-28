


// ---------------------------header



// firstSlider
const firstItems = document.querySelectorAll('.firstSlider__item')
const firstPrev = document.querySelector('.firstSlider__btn--prev');
const firstNext = document.querySelector('.firstSlider__btn--next');



function sliderMoveNext(item, prev, next) {
    function delClass() {
        for (i = 0; i < item.length; i++) {
            item[i].classList.remove('firstSlider__item--prev')
            item[i].classList.remove('firstSlider__item--active')
            item[i].classList.remove('firstSlider__item--next')
        }
    }
    let nextStep = 0;
    let activeStep = 1;
    let prevStep = 2;
    next.onclick = () => {
        prevStep++;
        activeStep++;
        nextStep++;
        if (prevStep === item.length) {
            prevStep = 0;
        } else if (activeStep === item.length) {
            activeStep = 0;
        } else if (nextStep === item.length) {
            nextStep = 0;
        }
        console.log(prevStep, activeStep, nextStep)
        delClass();
        item[prevStep].classList.add('firstSlider__item--next')
        item[activeStep].classList.add('firstSlider__item--active')
        item[nextStep].classList.add('firstSlider__item--prev')
    }
    prev.onclick = () => {
        delClass();
        prevStep--;
        activeStep--;
        nextStep--;
        if (prevStep === -1) {
            prevStep = item.length - 1;
        } else if (activeStep === -1) {
            activeStep = item.length - 1;
        } else if (nextStep === -1) {
            nextStep = item.length - 1;
        }
        console.log(prevStep, activeStep, nextStep)
        delClass();
        item[prevStep].classList.add('firstSlider__item--next')
        item[activeStep].classList.add('firstSlider__item--active')
        item[nextStep].classList.add('firstSlider__item--prev')
    }


}
sliderMoveNext(firstItems, firstPrev, firstNext) 