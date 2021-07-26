

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
        //centeredSlides: true,
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

if(document.querySelector('.slider-rooms__body')) {
    const swiper = new Swiper('.slider-rooms__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        watchOverFlow: true,
        speed: 800,
        loop: true,
        loopAditionalSliders: 5,
        preloadImages: false,
        parallax: true,
        //centeredSlides: true,
        // dots
        pagination: {
            el: '.slider-rooms__dotts',
            clickable: true,
        },
        // arrows
        navigation: {
            nextEl: '.slider-rooms .slider-arrow_next',
            prevEl: '.slider-rooms .slider-arrow_prev',
        }
    });
}

if(document.querySelector('.slider-tips__body')) {
    const swiper = new Swiper('.slider-tips__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 32,
        speed: 800,
        loop: true,
        watchOverFlow: true,
        // dots
        pagination: {
            el: '.slider-tips__dotts',
            clickable: true,
        },
        // arrows
        navigation: {
            nextEl: '.slider-tips .slider-arrow_next',
            prevEl: '.slider-tips .slider-arrow_prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 13,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 32,
            }
        }
    });
}


