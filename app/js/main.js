


// ---------------------------header



// swiper


new Swiper('.first-slider', {
    // buttons
    navigation: {
        nextEl: '.first-button-next',
        prevEl: '.first-button-prev',
    },
    // bullets
    pagination: {
        el: '.first-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    // progressbar
    // type:'progressbar'
    // type:'fraction'
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     bragable: true,
    // }
    // slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        // eventsTarget: '.first-slider',
    },
    // number of sliders
    sliderPreView: 3,
    loop: true,

})