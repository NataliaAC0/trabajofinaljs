/*Menu hamburguesa*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-btn').addEventListener('click', function () {
        document.getElementById('navbar-items').classList.toggle('active');
    });
});

/* Creación de efecto parallax*/
$(document).ready(function () {
    var $parallaxContainer = $('.imagen-principal-presupuesto-parallax');
 
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var parallaxOffset = scrollTop * 0.3; // Valor efecto parallax
        $parallaxContainer.find('.parallax').css('transform', 'translateY(' + parallaxOffset + 'px)');
    });
 });


document.addEventListener("DOMContentLoaded", function () {
    //definir constantes productos + extras + plazo + presupuesto final
    const productosCheckboxes = document.querySelectorAll('input[name="productos"]');
    const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
    const plazoSelect = document.getElementById("plazo");
    const presupuestoFinal = document.getElementById("presupuesto-final");

    productosCheckboxes.forEach(checkbox => checkbox.addEventListener('change', calcularPrecio));
    extrasCheckboxes.forEach(checkbox => checkbox.addEventListener('change', calcularPrecio));
    plazoSelect.addEventListener('change', calcularPrecio);

    function calcularPrecio() {
        let precioTotal = 0; //establecemos 0 como el precio principal
//productos
        productosCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                switch (checkbox.value) {
                    case 'producto-encimeras':
                        precioTotal += 800; // establecer precio para hacer cálculo
                        break;
                    case 'producto-encimeras2':
                        precioTotal += 2000;
                        break;
                    case 'producto-iluminacion':
                        precioTotal += 800;
                        break;
                    case 'producto-iluminacion2':
                        precioTotal += 1600;
                        break;
                    case 'producto-suelos':
                        precioTotal += 900;
                        break;
                    case 'producto-suelos2':
                        precioTotal += 2300;
                        break;
                    case 'producto-vitroceramicas':
                        precioTotal += 500;
                        break;
                    case 'producto-vitroceramicas2':
                        precioTotal += 1500;
                        break;
                }
            }
        });
//extras
        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                switch (checkbox.value) {
                    case 'cubos':
                        precioTotal += 30; //precio extras
                        break;
                    case 'cuberteria':
                        precioTotal += 25;
                        break;
                    case 'especieros':
                        precioTotal += 50;
                        break;
                    case 'estropajos':
                        precioTotal += 17;
                        break;
                }
            }
        });

//descuentos plazo 
        const plazo = parseInt(plazoSelect.value);
        let descuento = 0;
        if (plazo === 5) {
            descuento = 5; //5 dias 5%
        } else if (plazo === 7) {
            descuento = 10; //7 días 10%
        } else if (plazo === 10) {
            descuento = 15; //10 días 15%
        }

//calcular descuento dependiendo de en cuántos días escoja el usuario
        const descuentoAplicado = (precioTotal * descuento) / 100;
        const precioConDescuento = precioTotal - descuentoAplicado;

        // caja donde muestra el presupuesto final al usuario con todo lo seleccionado
        presupuestoFinal.textContent = `Presupuesto final con ${descuento}% de descuento: ${precioConDescuento.toFixed(2)}€`;
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        //crear constantes nombre, apellido, telefono, correo, aceptar politica 
        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;
        const aceptar = document.getElementById("aceptar").checked;
        //validacion elementos, crea alert con cada una de ellas
        if (!validarNombre(nombre)) {
            alert("Ingresa un nombre válido.");
            event.preventDefault();
            return;
        }

        if (!validarApellidos(apellidos)) {
            alert("Ingresa apellidos válidos.");
            event.preventDefault();
            return;
        }

        if (!validarTelefono(telefono)) {
            alert("Ingresa un número de teléfono válido.");
            event.preventDefault();
            return;
        }

        if (!validarCorreo(correo)) {
            alert("Ingresa una dirección de correo electrónico válida.");
            event.preventDefault();
            return;
        }

        if (!aceptar) {
            alert("Debes aceptar las condiciones para poder enviar el formulario.");
            event.preventDefault();
            return;
        }
    });
    //reglas de las validaciones
    function validarNombre(nombre) {
        const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]{1,15}$/; // solo letras de 1 a 15 caracteres
        return regex.test(nombre);
    }

    function validarApellidos(apellidos) {
        const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]{1,40}$/;//solo letras de 1 a 40 caracteres
        return regex.test(apellidos);
    }

    function validarTelefono(telefono) {
        const regex = /^[679]\d{8}$/; //solo digitos (9) que comience por 6,7 o 9
        return regex.test(telefono);
    }

    function validarCorreo(correo) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //validacion correo electrónico
        return regex.test(correo);
    }
});