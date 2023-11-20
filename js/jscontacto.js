/*Menu hamburguesa*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-btn').addEventListener('click', function () {
        document.getElementById('navbar-items').classList.toggle('active');
    });
});

/* Creación de efecto parallax*/
$(document).ready(function () {
    var $parallaxContainer = $('.imagen-principal-contacto-parallax');

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var parallaxOffset = scrollTop * 0.3; // Valor efecto parallax
        $parallaxContainer.find('.parallax').css('transform', 'translateY(' + parallaxOffset + 'px)');
    });
});

//mapa 
function initMap(lat, lon) {
    var mymap = L.map('mapa').setView([lat, lon], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mymap);

    L.Routing.control({
        waypoints: [
            L.latLng(lat, lon),         
            L.latLng(40.4431427, -3.6418032) 
        ],
        routeWhileDragging: true,
        language: 'es'
    }).addTo(mymap);
}

// Obtener la ubicación del usuario y cargar el mapa
function cargarMapa() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            //coordenadas usuario geolocalización
            var latitude = position.coords.latitude; 
            var longitude = position.coords.longitude;

            initMap(latitude, longitude);
        }, function (error) {
            //error si no puede geolocalizar al usuario
            console.error("Error al obtener la ubicación: " + error.message);
        });
    } else {
        console.error("Geolocalización no es compatible con este navegador.");
    }
}
cargarMapa();
