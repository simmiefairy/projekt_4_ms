
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

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

for (let i = 0; i < dropdownToggles.length; i++) {
    
    let toggleKnap = dropdownToggles[i]; 

    toggleKnap.addEventListener('click', function(event) {
        

        if (window.innerWidth <= 900) {
            
            event.preventDefault(); 

            let underMenu = toggleKnap.parentElement.querySelector('.dropdown-menu');

            if (underMenu !== null) {
                underMenu.classList.toggle('show');
            }
        }
    });
}