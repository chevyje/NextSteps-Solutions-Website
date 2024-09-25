const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const profielButton = document.getElementById("profiel-button");
const emailbox = document.getElementById("email-box");
const passwordBox = document.getElementById("password-box");
const navbar = document.getElementById("navbar");

check();

function check(){
    if(getCookieValue("isUserLoggedIn") == "true"){
        loggedIn();
    } else if(getCookieValue("isUserLoggedIn") == "false"){
        loggedOut();
    } else {
        setLoginCookie(false);  
        check();
    }
}


function logout(){
    setLoginCookie(false);
    check();
}


function login(){
    if (emailbox.value != "" && passwordBox.value != ""){
        setLoginCookie(true)
        check();
    }
        
}


function loggedIn(){
    loginButton.style.display = "none";
    profielButton.style.display = "inline";
    logoutButton.style.display = "inline";
    navbar.style.display = "inline";
    console.log("logged in!");
}


function loggedOut(){
    profielButton.style.display = "none";
    logoutButton.style.display = "none";
    loginButton.style.display = "inline";
    navbar.style.display = "inline";
    console.log("logged out!");
}


// COOKIES
function setLoginCookie(loginBool) {
    const cookieArr = document.cookie.split("; ");

    for (let i = 0; i < cookieArr.length; i++) {
        document.cookie = "isUserLoggedIn=" + loginBool + "; path=/"
        console.log(document.cookie);
    }
  }


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


function clearCookies(){
    document.cookie = "isUserLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}