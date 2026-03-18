document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function(e) {
            e.preventDefault(); 

            const dropdownMenu = this.nextElementSibling;

            // Lukker alle andre åbne menuer
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("show");
                }
            });

            // Åbner/lukker den menu man klikkede på
            dropdownMenu.classList.toggle("show");
        });
    });

    // Lukker menuen, hvis man klikker et vilkårligt sted udenfor knapperne
    window.addEventListener("click", function(e) {
        if (!e.target.closest(".dropdown-container")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.classList.remove("show");
            });
        }
    });
});