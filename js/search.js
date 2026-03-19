const data = [

  { navn: "Gør en forskel" },
  { navn: "Besøg os" },
  { navn: "Om os" },
  { navn: "Vores arbejde" },
  { navn: "English" },
  { navn: "Shop" },
  { navn: "Bliv medlem" },
  { navn: "Kalender" },
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