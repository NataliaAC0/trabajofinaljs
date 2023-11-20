/*Menu hamburguesa*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-btn').addEventListener('click', function () {
        document.getElementById('navbar-items').classList.toggle('active');
    });
});

/* Creación de efecto parallax*/
$(document).ready(function () {
    var $parallaxContainer = $('.imagen-principal-suelos-parallax');

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var parallaxOffset = scrollTop * 0.3; 
        $parallaxContainer.find('.parallax').css('transform', 'translateY(' + parallaxOffset + 'px)');
    });
});
// OWL CARRUSEL º
$(document).ready(function () {
    $('.slider-suelos-standard').owlCarousel({
       items: 3, 
       loop: true,
       margin: 10, 
       autoplay: true,
       autoplayTimeout: 2000,
       autoplayHoverPause: true
    });
 });
 
// OWL CARRUSEL 2
$(document).ready(function () {
    $('.slider-suelos-premium').owlCarousel({
       items: 3, 
       loop: true,
       margin: 10, 
       autoplay: true,
       autoplayTimeout: 2000,
       autoplayHoverPause: true
    });
 });

