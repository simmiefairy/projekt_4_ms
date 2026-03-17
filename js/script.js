let currentSlide = 0;
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Logik til at skifte billede
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    // Her ville du også flytte selve billedet/slides
}

// Event listeners til pile
document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % dots.length;
    showSlide(currentSlide);
});