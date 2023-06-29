const MainSlide = new Swiper('.main_slide', {
    loop: true,
});

const leftArrow = document.querySelector('#MainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev();
});

const rightArrow = document.querySelector('#MainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext();
});


const proSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },

})

