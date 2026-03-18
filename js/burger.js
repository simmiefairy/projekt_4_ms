
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

const alleLinks = Array.from(document.querySelectorAll('.main-nav a'));

for (let i = 0; i < alleLinks.length; i++) {
    
   
    let link = alleLinks[i]; 
    
    link.addEventListener('click', function() {
        console.log("Du klikkede på et link: " + link.textContent);
    });
}