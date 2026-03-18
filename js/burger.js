// 1. FEJLFINDING
console.log("Burger.js er indlæst og klar!");

// --- ÅBN/LUK SELVE BURGERMENUEN ---
const navMenu = document.querySelector('.main-nav');
const burgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');

const menuStatus = {
    isOpen: false
};

function toggleMenu() {
    if (menuStatus.isOpen === false) {
        navMenu.classList.add('active');
        menuStatus.isOpen = true; 
        console.log("Menuen blev åbnet");
    } else {
        navMenu.classList.remove('active');
        menuStatus.isOpen = false;
        console.log("Menuen blev lukket");
    }
}

burgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


// --- ACCORDION DROPDOWNS (Fold-ud menuer på mobil) ---
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

for (let i = 0; i < dropdownToggles.length; i++) {
    
    let toggleKnap = dropdownToggles[i]; 

    toggleKnap.addEventListener('click', function(event) {
        
        // VIGTIGT: Kør kun denne kode, hvis skærmen er 900px eller mindre!
        // Dette forhindrer filen i at ødelægge din desktop-menu.
        if (window.innerWidth <= 900) {
            
            event.preventDefault(); // Forhindrer at skærmen hopper til toppen

            // Finder <ul> menuen inde i det samme <li> tag som knappen
            let underMenu = toggleKnap.parentElement.querySelector('.dropdown-menu');

            // Tilføjer eller fjerner klassen 'show' (som viser menuen)
            if (underMenu !== null) {
                underMenu.classList.toggle('show');
            }
        }
    });
}