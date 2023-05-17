// Animate on Scroll Library
jQuery(window).on('load', function () {
    AOS.init({
        easing: 'ease-in-out-sine'
    });
});

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

// Responsive Navigation Bar menu trigger
$('.btn-nav').on('click', function () {
    $(".responsive-navigation").toggleClass('open');
});

// Top Down button
var btn = $('#bottomtop');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});