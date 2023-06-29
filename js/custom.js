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
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },

    scrollbar: {
        el: ".drag",
        draggable: true,
        dragSize: 300,
        hide: false,
    },

})

