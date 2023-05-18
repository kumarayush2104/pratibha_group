// Own carousel Library
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        dots: false,
        margin: 0,
        smartSpeed: 2000,
        autoplay: false,
    });
})