

if(document.querySelector('.slider-main__body')) {
    const swiper = new Swiper('.slider-main__body', {
        observer: true,
        observeParents: true,
        sliderPerView: 1,
        spaceBetween: 32,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        loopAditionalSliders: 5,
        preloadImages: false,
        parallax: true,
        // dots
        pagination: {
            el: '.controls-slider-main__dotts',
            clickable: true,
        },
        // arrows
        navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev',
        }
    });
}

/* 
, {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 32,
    watchOverFlow: true,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.slider-arrow_prev',
        prevEl: '.slider-arrow_next'
    },
}*/