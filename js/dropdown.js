/* Kilde/Reference: 
Koden til dropdown hover-effekten er udviklet med hjælp og vejledning fra AI (Google Gemini), 
med udgangspunkt i tilpasning af vores oprindelige klik-baserede menu.
*/
document.addEventListener("DOMContentLoaded", () => {
    // Vi tager fat i hele containeren (bade knap og menu) i stedet for kun knappen
    const dropdownContainers = document.querySelectorAll(".nav__item");

    dropdownContainers.forEach(container => {
        const dropdownMenu = container.querySelector(".dropdown");

        if (!dropdownMenu) return;

        // Nar musen kommer ind over "zonen" (knap ELLER menu)
        container.addEventListener("mouseenter", () => {
            // Skjul andre abne menuer for en sikkerheds skyld
            document.querySelectorAll(".dropdown").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("dropdown--active");
                }
            });

            // Abn denne menu
            dropdownMenu.classList.add("dropdown--active");
        });

        // Nar musen forlader "zonen" helt (korer vaek fra bade knap og menu)
        container.addEventListener("mouseleave", () => {
            dropdownMenu.classList.remove("dropdown--active");
        });
    });
});