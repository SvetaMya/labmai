const swiper = new Swiper(".top-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
});
