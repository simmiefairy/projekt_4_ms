
const navMenu = document.querySelector('.nav');
const burgerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

const menuStatus = {
    isOpen: false
};

function toggleMenu() {
    if (menuStatus.isOpen === false) {
        navMenu.classList.add('nav--active');
        menuStatus.isOpen = true;
        console.log("Menuen blev abnet");
    } else {
        navMenu.classList.remove('nav--active');
        menuStatus.isOpen = false;
        console.log("Menuen blev lukket");
    }
}

burgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

const dropdownToggles = document.querySelectorAll('.nav__link--dropdown');

for (let i = 0; i < dropdownToggles.length; i++) {

    let toggleKnap = dropdownToggles[i];

    toggleKnap.addEventListener('click', function(event) {

        if (window.innerWidth <= 900) {

            event.preventDefault();

            let underMenu = toggleKnap.parentElement.querySelector('.dropdown');

            if (underMenu !== null) {
                underMenu.classList.toggle('dropdown--active');
            }
        }
    });
}
