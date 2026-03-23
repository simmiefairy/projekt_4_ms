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

let erAktiv = false;

function visDropdown(query) {
  const dropdown  = document.getElementById('dropdown');
  const container = document.getElementById('soegContainer');
  dropdown.innerHTML = '';

  const resultater = data.filter(function(item) {
    if (query === '') return true;
    return item.navn.toLowerCase().includes(query.toLowerCase());
  });

  if (resultater.length === 0) {
    dropdown.innerHTML = '<div class="ingen-resultater">Ingen resultater fundet</div>';
    container.classList.add('dropdown-aktiv');
    return;
  }

  for (let i = 0; i < resultater.length; i++) {
    const item = document.createElement('div');
    item.classList.add('dropdown-item');
    item.innerHTML =
      '<span class="ikon">' + resultater[i].ikon + '</span>' +
      resultater[i].navn;

    item.addEventListener('click', function() {
      document.getElementById('soegInput').value = resultater[i].navn;
      document.getElementById('valgtTekst').textContent = '✓ Du valgte: ' + resultater[i].navn;
      container.classList.remove('dropdown-aktiv');
      container.classList.add('har-valgt');
    });

    dropdown.appendChild(item);
  }

  container.classList.add('dropdown-aktiv');
}

function lukkAlt() {
  const container = document.getElementById('soegContainer');
  const input     = document.getElementById('soegInput');
  container.classList.remove('aktiv', 'dropdown-aktiv');
  input.value = '';
  document.getElementById('dropdown').innerHTML = '';
  erAktiv = false;
}

document.getElementById('soegIkon').addEventListener('click', function() {
  const container = document.getElementById('soegContainer');
  const input     = document.getElementById('soegInput');

  if (erAktiv) {
    lukkAlt();
  } else {
    container.classList.add('aktiv');
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
  document.getElementById('soegContainer').classList.remove('har-valgt');
  visDropdown(this.value.trim());
});

document.addEventListener('click', function(e) {
  const container = document.getElementById('soegContainer');
  if (!container.contains(e.target)) {
    lukkAlt();
  }
});

/* Frivillig siden */
// fmain.js — clean, robust form validation for Findex.html / Fstyle.css

// This file should be included in the page as:
// <script src="fmain.js"></script>

const form = document.querySelector('form');

if (!form) {
  console.warn('fmain.js: Ingen <form> fundet på siden. Ingen validering tilføjet.');
} else {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    // Fjern gamle fejl kun indenfor formen
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.error-message').forEach(el => el.remove());

    // Felter
    const fornavn = form.querySelector("[name='fornavn']");
    const efternavn = form.querySelector("[name='efternavn']");
    const email = form.querySelector("[name='email']");
    const onsker = form.querySelector("[name='onsker']");
    const omraade = form.querySelector("[name='omraade']");

    function showError(input, message) {
      if (!input) return;
      valid = false;
      input.classList.add('error');

      const msg = document.createElement('div');
      msg.className = 'error-message';
      msg.innerText = message;

      // Sæt fejlbeskeden lige efter input'et
      input.insertAdjacentElement('afterend', msg);
    }

    // Validering (tjek at felterne findes først)
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
      showError(omraade, 'Vælg et område');
    }

    // Hvis alt er validt
    if (valid) {
      alert('Tak! Din tilmelding er sendt 🎉');
      form.reset();
    }
  });
}

// Email validator
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}