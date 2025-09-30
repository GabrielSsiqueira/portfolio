$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
        0: {
            items: 1
        },
        425: {
            items: 1
        },
        768:{
            items: 3
        },
        1024:{
            items: 3
        }
    },
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
  });
});
