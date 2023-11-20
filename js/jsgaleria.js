/*Menu hamburguesa*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-btn').addEventListener('click', function () {
        document.getElementById('navbar-items').classList.toggle('active');
    });
});

// Creación de efecto parallax
$(document).ready(function () {
    var $parallaxContainer = $('.imagen-principal-galeria-parallax');

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var parallaxOffset = scrollTop * 0.2;
        $parallaxContainer.find('.parallax').css('transform', 'translateY(' + parallaxOffset + 'px)');
    });
});

// Galería
document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const imagePaths = [
        /* Imágenes */
        '../assets/images/gallery/photo-2.jpg',
        '../assets/images/gallery/photo-4.jpg',
        '../assets/images/gallery/photo-5.jpg',
        '../assets/images/gallery/photo-1.jpg',
        '../assets/images/gallery/photo-3.jpg',
        '../assets/images/gallery/photo-6.jpg'
    ];

    // Agregar img a la galería
    imagePaths.forEach((path, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const image = document.createElement('img');
        image.src = path;
        image.alt = `Image ${index + 1}`;

        image.addEventListener('click', () => openModal(path, index));

        galleryItem.appendChild(image);
        galleryContainer.appendChild(galleryItem);
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));
    window.addEventListener('click', outsideClick);

    let currentIndex = 0;

    // Abrir modal cuando clickeas sobre img
    function openModal(imagePath, index) {
        modal.style.display = 'block';
        modalImage.src = imagePath;
        currentIndex = index;

        centerModalImage();

        document.body.classList.add('modal-open');  // Quitar barra desplazamiento
    }

    /*Centrar imagen*/
    function centerModalImage() {
        const modalWidth = modal.offsetWidth;
        const modalHeight = modal.offsetHeight;
        const imageWidth = modalImage.offsetWidth;
        const imageHeight = modalImage.offsetHeight;

        const leftPosition = (modalWidth - imageWidth) / 2;
        const topPosition = (modalHeight - imageHeight) / 2;

        modalImage.style.left = `${leftPosition}px`;
        modalImage.style.top = `${topPosition}px`;
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Restaurar barra desplazamiento
    }

    function outsideClick(e) {
        if (e.target === modal) {
            closeModal();
        }
    }

    document.addEventListener('keydown', function (e) {
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                navigate(-1);
            } else if (e.key === 'ArrowRight') {
                navigate(1);
            }
        }
    });

    function navigate(direction) {
        currentIndex = (currentIndex + direction + imagePaths.length) % imagePaths.length;
        modalImage.src = imagePaths[currentIndex];
        centerModalImage();
    }
});




