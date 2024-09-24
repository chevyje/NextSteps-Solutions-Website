const loginButton = document.getElementById("login-button");
const profielButton = document.getElementById("profiel-button");
const logoutButton = document.getElementById("logout-button");
document.cookie = "isUserLoggedIn=true;";
let loggedIn = cookieValue === "true";  // true
getCookie(isUserLoggedIn)
console.log(loggedIn);
check(isUserLoggd);

// Function to get a cookie value by name
function getCookie(name) {
    let cookieArr = document.cookie.split(";");

    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        // Remove whitespace at the beginning of the cookie name and compare it with the given name
        if(name === cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}

// Read the boolean value from the cookie and convert it
let cookieValue = getCookie("isUserLoggedIn");

// Convert the string to a boolean
let isUserLoggedIn = cookieValue === "true";

console.log(isUserLoggedIn); // true or false


function check(){
    if(logged_in == true){
        loggedIn();
    } else if(loggedIn == false){
        loggedOut();
    } else {
        loggedIn = false;
        check();
    }
}

function logout(){
    logged_in = false;
    console.log("sick");
    check();
}

function login(){
    loggedIn = true;
    check();
}

function loggedIn(){
    loginButton.style.display = "none";
    profielButton.style.display = "inline";
    logoutButton.style.display = "inline";
    document.cookie = true;
    console.log("true");
}

function loggedOut(){
    profielButton.style.display = "none";
    logoutButton.style.display = "none";
    loginButton.style.display = "inline";
    document.cookie = false;x
    console.log("false");
}