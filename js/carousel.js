
let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

const titles = [
  "Støt Grønland",
  "Gør en forskel",
  "Vores arbejde",
  "Tidselruten"
];

const mainTitle = document.getElementById("mainTitle");

// Auto slide stopper hvis man klikke frem eller tilbage på slideshowet
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    plusSlides(1);
  }, 4000);
}



function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev-slide");

    if (i === index) {
      slide.classList.add("active");
    } else if (i < index) {
      slide.classList.add("prev-slide");
    }
  });


  // Dots fix
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

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



//Mouse hover stopper timeren på automatisk slide
const container = document.querySelector(".slideshow-container");

container.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

container.addEventListener("mouseleave", () => {
  resetAutoSlide();
});