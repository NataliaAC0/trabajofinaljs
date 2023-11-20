/*Menu hamburguesa*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-btn').addEventListener('click', function () {
        document.getElementById('navbar-items').classList.toggle('active');
    });
});


    /* Creación de efecto parallax*/
    $(document).ready(function () {
    var $parallaxContainer = $('.imagen-principal-parallax');

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var parallaxOffset = scrollTop * 0.2;
        $parallaxContainer.find('.parallax').css('transform', 'translateY(' + parallaxOffset + 'px)');
    });
});


// CARRUSEL
// Cambia de imagen cada 4 segundos
setInterval(function () {
    swiper.slideNext();
}, 6000);

/* Cuarta sección nuestro equipo archivo json*/
document.addEventListener('DOMContentLoaded', function () {
    fetch('assets/resources/json.json')
        .then(response => response.json())
        .then(data => {
            const equipo = data.equipo;
            const contenedor = document.querySelector('.nuestro-equipo');

            equipo.forEach(persona => {
                const divPersona = document.createElement('div');
                const imagen = document.createElement('img');
                const texto = document.createElement('p');

                imagen.src = persona.imagen;
                texto.innerHTML = `<strong>${persona.rol}</strong><br>${persona.nombre} ${persona.apellido}<br>${persona.numero}`;

                divPersona.appendChild(imagen);
                divPersona.appendChild(texto);
                contenedor.appendChild(divPersona);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});


