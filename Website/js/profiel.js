voornaam_text = document.getElementById("voornaam");
achternaam_text = document.getElementById("achternaam");
username = document.getElementById("username");

function displayName(voornaam, achternaam) {
    console.log(typeof voornaam);
    voornaam_text = voornaam;
    achternaam_text.value = achternaam;
    username.style.display = "inline";
}

displayName("Tim", "van de Beek");