const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    loop: true,
    preloadImages: false,
    lazyLoading: true,
    autoplay: {
        delay: 2000,
    },
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 30,
});