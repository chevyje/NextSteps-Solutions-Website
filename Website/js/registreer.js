const voornaam_input = document.getElementById("voornaam-input");
const achternaam_input = document.getElementById("achternaam-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const password_confirm_input = document.getElementById("password-confirm-input");

function checkEmpty() {
    if(voornaam_input.value != "" && achternaam_input.value != "" && email_input.value != "" && password_input.value != "" && password_confirm_input.value != ""){
       if(password_input.value == password_confirm_input.value) {
         location.href='login.html'
       }
    }
}