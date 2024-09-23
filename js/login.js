const loginButton = document.getElementById("login-button");
const profielButton = document.getElementById("profiel-button");
const logoutButton = document.getElementById("logout-button");
let logged_in = false;
check();

function check(){
    if(logged_in == true){
        loggedIn();
    } else {
        loggedOut();
    }
}

function logout(){
    logged_in = false;
    console.log("sick");
    check();
}

function login(){
    logged_in = true;
    check();
}

function loggedIn(){
    loginButton.style.display = "none";
    profielButton.style.display = "inline";
    logoutButton.style.display = "inline";
    console.log("true");
}

function loggedOut(){
    profielButton.style.display = "none";
    logoutButton.style.display = "none";
    loginButton.style.display = "inline";
    console.log("false");
}