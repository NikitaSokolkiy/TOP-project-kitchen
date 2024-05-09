const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.button-swiper__right',
        prevEl: '.button-swiper__left',
    },
});

