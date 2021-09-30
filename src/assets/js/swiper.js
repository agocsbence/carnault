var swiper = new Swiper(".homeSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 10,
        disableOnInteraction: false,
    },
    speed: 6000,
});

var packageSwiper = new Swiper(".packageSwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    centeredSlides: true,
});