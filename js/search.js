/* Brugt chatGPT og Claude AI til noget af søgefunktionens kode & W3schools hjemmeside*/
/* Koden indeholder, Array, Funktion Drop-down, Filter, Funktion LukkAlt */
const data = [
{ navn: "Gør en forskel", ikon: "→" },
{ navn: "Besøg os", ikon: "→" },
{ navn: "Om os", ikon: "→" },
{ navn: "Vores arbejde", ikon: "→" },
{ navn: "English", ikon: "→" },
{ navn: "Shop", ikon: "→" },
{ navn: "Bliv medlem", ikon: "→" },
  { navn: "Kalender", ikon: "→" },
];
/* Array */

let erAktiv = false;

function visDropdown(query) {
    const dropdown = document.getElementById('dropdown');
    const container = document.getElementById('soegContainer');
    dropdown.innerHTML = '';

    /*Funktion Drop-down*/

    const resultater = data.filter(function(item) {
        if (query === '') return true;
        return item.navn.toLowerCase().includes(query.toLowerCase());
    });

    if (resultater.length === 0) {
        dropdown.innerHTML = '<div class="search__no-results">Ingen resultater fundet</div>';
        container.classList.add('search--dropdown-active');
        return;
    }

    for (let i = 0; i < resultater.length; i++) {
        const item = document.createElement('div');
        item.classList.add('search__dropdown-item');
        item.innerHTML =
            '<span class="search__dropdown-icon">' + resultater[i].ikon + '</span>' +
            resultater[i].navn;

        item.addEventListener('click', function() {
            document.getElementById('soegInput').value = resultater[i].navn;
            document.getElementById('valgtTekst').textContent = 'Du valgte: ' + resultater[i].navn;
            container.classList.remove('search--dropdown-active');
            container.classList.add('search--has-selection');
        });

        dropdown.appendChild(item);
    }

    container.classList.add('search--dropdown-active');
}
/* LukkAlt */
function lukkAlt() {
    const container = document.getElementById('soegContainer');
    const input = document.getElementById('soegInput');
    container.classList.remove('search--active', 'search--dropdown-active');
    input.value = '';
    document.getElementById('dropdown').innerHTML = '';
    erAktiv = false;
}

document.getElementById('soegIkon').addEventListener('click', function() {
    const container = document.getElementById('soegContainer');
    const input = document.getElementById('soegInput');

    if (erAktiv) {
        lukkAlt();
    } else {
        container.classList.add('search--active');
        erAktiv = true;
        setTimeout(function() {
            input.focus();
        }, 420);
    }
});

document.getElementById('soegInput').addEventListener('focus', function() {
    visDropdown(this.value.trim());
});

document.getElementById('soegInput').addEventListener('input', function() {
    document.getElementById('soegContainer').classList.remove('search--has-selection');
    visDropdown(this.value.trim());
});

document.addEventListener('click', function(e) {
    const container = document.getElementById('soegContainer');
    if (!container.contains(e.target)) {
        lukkAlt();
    }
});

/* Frivillig siden */
// Form validation for volunteer page

const form = document.querySelector('form');

if (!form) {
    console.warn('search.js: Ingen <form> fundet pa siden. Ingen validering tilfojet.');
} else {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let valid = true;

        // Fjern gamle fejl kun indenfor formen
        form.querySelectorAll('.form__input--error, .form__select--error').forEach(el => {
            el.classList.remove('form__input--error', 'form__select--error');
        });
        form.querySelectorAll('.form__error').forEach(el => el.remove());

        // Felter
        const fornavn = form.querySelector("[name='fornavn']");
        const efternavn = form.querySelector("[name='efternavn']");
        const email = form.querySelector("[name='email']");
        const onsker = form.querySelector("[name='onsker']");
        const omraade = form.querySelector("[name='omraade']");

        function showError(input, message) {
            if (!input) return;
            valid = false;

            if (input.tagName === 'SELECT') {
                input.classList.add('form__select--error');
            } else {
                input.classList.add('form__input--error');
            }

            const msg = document.createElement('div');
            msg.className = 'form__error';
            msg.innerText = message;

            // Saet fejlbeskeden lige efter input'et
            input.insertAdjacentElement('afterend', msg);
        }

        // Validering (tjek at felterne findes forst)
        if (!fornavn || fornavn.value.trim() === '') {
            showError(fornavn, 'Indtast fornavn');
        }

        if (!efternavn || efternavn.value.trim() === '') {
            showError(efternavn, 'Indtast efternavn');
        }

        if (!email || email.value.trim() === '') {
            showError(email, 'Indtast email');
        } else if (!validateEmail(email.value)) {
            showError(email, 'Ugyldig email');
        }

        if (!onsker || onsker.value === '') {
            showError(onsker, 'Vælg en mulighed');
        }

        if (!omraade || omraade.value === '') {
            showError(omraade, 'Vælg et omrade');
        }

        // Hvis alt er validt
        if (valid) {
            alert('Tak! Din tilmelding er sendt');
            form.reset();
        }
    });
}

// Email validator
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
