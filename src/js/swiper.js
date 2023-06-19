// const swiper = new Swiper('.swiper', {
// Optional parameters
// direction: 'horizontal',
// loop: true,

// If we need pagination
// pagination: {
// el: '.swiper-pagination',
// },
// slidesPerGroup: 4,
// slidesPerView: 'auto',
// });

var sliderSelector = '.products-swiper',
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 60,
      modifier: 1,
      slideShadows: true,
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: '.products-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.5,
      },
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
      onluInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.products-swiper',
    },
  };
var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();
