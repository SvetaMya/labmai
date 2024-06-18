var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  thumbs: {
    swiper: swiper,
  },
});