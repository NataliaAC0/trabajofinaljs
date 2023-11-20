/*Menu hamburguesa*/
document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('menu-btn').addEventListener('click', function () {
       document.getElementById('navbar-items').classList.toggle('active');
   });
});

/* Creación de efecto parallax*/
$(document).ready(function () {
   var $parallaxContainer = $('.imagen-principal-accesorios-parallax');

   $(window).scroll(function() {
       var scrollTop = $(window).scrollTop();
       var parallaxOffset = scrollTop * 0.3; // Valor efecto parallax
       $parallaxContainer.find('.parallax').css('transform', 'translateY(' + parallaxOffset + 'px)');
   });
});

// Inicializar el carrusel 1 con Owl Carousel
$(document).ready(function () {
    // Inicializar el carrusel 1 con Owl Carousel
    $('.slider-accesorios').owlCarousel({
       items: 3, // 3 elementos
       loop: true,
       margin: 10, // Margen entre foto y foto
       autoplay: true,
       autoplayTimeout: 2000,
       autoplayHoverPause: true
    });
 });