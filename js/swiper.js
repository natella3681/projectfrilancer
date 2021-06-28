new Swiper('.slider-main__body', {
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
});