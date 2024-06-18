const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu--close");
// var mixer = mixitup(".gallery__inner", {
//   load: {
//     filter: ".category-a",
//   },
// });

// menuBtn.addEventListener("click", () => {
//   menuList.classList.toggle("menu__list--open");
//   menuShadow.classList.toggle("menu--open");
// });

// menuClose.addEventListener("click", () => {
//   menuList.classList.remove("menu__list--open");
//   menuShadow.classList.remove("menu--open");
// });

document.querySelectorAll(".vacancy__accordeon").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      document
        .querySelectorAll(".vacancy__content")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".vacancy__content")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

$(window).scroll(function () {
  let scrolled = $(window).scrollTop();

  if (scrolled > 300) {
    $("#back_to_top").addClass("active");
  } else {
    $("#back_to_top").removeClass("active");
  }
});

$("#back_to_top").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 1000);
});

document.querySelectorAll(".accordeon-cryopower__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordeon-cryopower__item--active");
  });
});
