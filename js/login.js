const loginButton = document.getElementById("login-button");
const profielButton = document.getElementById("profiel-button");
const logoutButton = document.getElementById("logout-button");

// Function to get the value of a specific cookie by name
function getCookieValue(name) {
  const cookieArr = document.cookie.split("; ");
  
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");
    
    // Check if this cookie's name matches the name parameter
    if (cookiePair[0] === name) {
      return cookiePair[1];
    }
  }
  
  // Return null if the cookie is not found
  return null;
}

// Read and covert cookie to boolean
let logged_in_string = getCookieValue("loggedIn");
let logged_in = (logged_in_string.toLowerCase() === "true"); 
check();

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
    document.cookie = "loggedIn=true";
    console.log("logged in!");
}

function loggedOut(){
    profielButton.style.display = "none";
    logoutButton.style.display = "none";
    loginButton.style.display = "inline";
    document.cookie = "loggedIn=true";
    console.log("logged out!");
}