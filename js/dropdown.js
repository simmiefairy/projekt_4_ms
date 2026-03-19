/* Kilde/Reference: 
Koden til dropdown hover-effekten er udviklet med hjælp og vejledning fra AI (Google Gemini), 
med udgangspunkt i tilpasning af vores oprindelige klik-baserede menu.
*/
document.addEventListener("DOMContentLoaded", () => {
    // Vi tager fat i hele containeren (både knap og menu) i stedet for kun knappen
    const dropdownContainers = document.querySelectorAll(".dropdown-container");

    dropdownContainers.forEach(container => {
        const dropdownMenu = container.querySelector(".dropdown-menu");

        // Når musen kommer ind over "zonen" (knap ELLER menu)
        container.addEventListener("mouseenter", () => {
            // Skjul andre åbne menuer for en sikkerheds skyld
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("show");
                }
            });
            
            // Åbn denne menu
            dropdownMenu.classList.add("show");
        });

        // Når musen forlader "zonen" helt (kører væk fra både knap og menu)
        container.addEventListener("mouseleave", () => {
            dropdownMenu.classList.remove("show");
        });
    });
});