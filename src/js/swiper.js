const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints:{
        1100:{
          slidesPerView: 3
        },
        760: {
            slidesPerView: 2,
            // centeredSlides: true,
            // spaceBetween: 30,
            // grabCursor: true,
        }
    },
    navigation: {
        nextEl: '.button-swiper__right',
        prevEl: '.button-swiper__left',
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

});

