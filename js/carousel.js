// Jeg har brugt Ai til hjælp med koden, tjek bilag (Zipfil -> Ai prompter -> Ai Prompt Mads.pdf)

let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow__slide");
const dots = document.querySelectorAll(".dots__item");

const titles = [
    "Støt Grønland",
    "Gør en forskel",
    "Vores arbejde",
    "Tidselruten"
];

const mainTitle = document.getElementById("mainTitle");

// Auto slide stopper hvis man klikke frem eller tilbage pa slideshowet
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        plusSlides(1);
    }, 4000);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("slideshow__slide--active", "slideshow__slide--prev");

        if (i === index) {
            slide.classList.add("slideshow__slide--active");
        } else if (i < index) {
            slide.classList.add("slideshow__slide--prev");
        }
    });

    // Dots fix
    dots.forEach(dot => dot.classList.remove("dots__item--active"));
    dots[index].classList.add("dots__item--active");

    // Opdater titel
    mainTitle.textContent = titles[index];
}

function plusSlides(n) {
    slideIndex += n;

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    showSlide(slideIndex);
    resetAutoSlide();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlide(slideIndex);
    resetAutoSlide();
}

// Start
showSlide(slideIndex);

let autoSlide = setInterval(() => {
    plusSlides(1);
}, 4000); // skifter hvert 4. sekund

// Mouse hover stopper timeren pa automatisk slide
const container = document.querySelector(".slideshow__container");

container.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

container.addEventListener("mouseleave", () => {
    resetAutoSlide();
});
