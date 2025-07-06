$(function () {
  $("header.header .inner .right .menu-bar a").on("click", function () {
    $("header.header .inner .center").slideToggle(200);
  });

  $(".counter").counterUp({
    delay: 20,
    time: 2000,
  });
});
