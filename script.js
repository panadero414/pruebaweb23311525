function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

// Clona las imágenes al principio y al final
slides.forEach(slide => {
    const cloneFirst = slide.cloneNode(true);
    const cloneLast = slide.cloneNode(true);
    carousel.appendChild(cloneFirst);
    carousel.insertBefore(cloneLast, carousel.firstChild);
});





