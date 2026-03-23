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