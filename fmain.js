<script>
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    // Fjern gamle fejl
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    // Felter
    const fornavn = form.querySelector("[name='fornavn']");
    const efternavn = form.querySelector("[name='efternavn']");
    const email = form.querySelector("[name='email']");
    const onsker = form.querySelector("[name='onsker']");
    const omraade = form.querySelector("[name='omraade']");

    function showError(input, message) {
        valid = false;
        input.classList.add("error");

        const msg = document.createElement("div");
        msg.className = "error-message";
        msg.innerText = message;

        input.parentNode.insertBefore(msg, input.nextSibling);
    }

    // Validering
    if (fornavn.value.trim() === "") {
        showError(fornavn, "Indtast fornavn");
    }

    if (efternavn.value.trim() === "") {
        showError(efternavn, "Indtast efternavn");
    }

    if (email.value.trim() === "") {
        showError(email, "Indtast email");
    } else if (!validateEmail(email.value)) {
        showError(email, "Ugyldig email");
    }

    if (onsker.value === "") {
        showError(onsker, "Vælg en mulighed");
    }

    if (omraade.value === "") {
        showError(omraade, "Vælg et område");
    }

    // Hvis alt er validt
    if (valid) {
        alert("Tak! Din tilmelding er sendt 🎉");
        form.reset();
    }
});

// Email validator
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
</script>