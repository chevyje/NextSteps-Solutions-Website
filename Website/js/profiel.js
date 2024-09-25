voornaam_text = document.getElementById("voornaam");
achternaam_text = document.getElementById("achternaam");
username = document.getElementById("username");

function displayName(voornaam, achternaam) {
    console.log(typeof achternaam);
    voornaam_text.textContent = voornaam;
    achternaam_text.textContent = achternaam;
    username.style.display = "inline";
}