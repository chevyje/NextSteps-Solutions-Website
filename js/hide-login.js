const loginButton = document.getElementById("login-button");
const profielButton = document.getElementById("profiel-button");
let logged_in = false;

if(logged_in == true){
    hideLogin();
    
} else {
    hideProfiel();
  
}

function hideLogin(){
    loginButton.style.display = "none";
    profielButton.style.display = "flex";
    console.log("true");
}

function hideProfiel(){
    profielButton.style.display = "none";
    loginButton.style.display = "flex";
    console.log("false");
}