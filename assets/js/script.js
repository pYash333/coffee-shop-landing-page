AOS.init({
  
})
$(function () {
  $("header.header .inner .right .menu-bar a").on("click", function () {
    $("header.header .inner .center").slideToggle(200);
  });

  $(".counter").counterUp({
    delay: 20,
    time: 2000,
  });

  if ($(".testimonial-section").length) {
    new Splide(".testimonial-section .cards-wrapper", {
      type: "loop",
      perPage: 3,
      autoplay: true,
      arrows: false,
      pagination: true,
      breakpoints: {
        991: {
          perPage: 2,
        },
        767: {
          perPage: 1,
        },
      },
    }).mount();
  }
});
