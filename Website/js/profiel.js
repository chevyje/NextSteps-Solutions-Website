voornaam_text = document.getElementById("voornaam");
achternaam_text = document.getElementById("achternaam");
username = document.getElementById("username");

window.onload = function() {
    const voornaam = localStorage.getItem('voornaam');
    const achternaam = localStorage.getItem('achternaam');
    displayName(voornaam, achternaam);
}

function displayName(voornaam, achternaam) {
    console.log(typeof achternaam);
    voornaam_text.textContent = voornaam;
    achternaam_text.textContent = achternaam;
    username.style.display = "inline";
}