window.onload = function() {
    const errorType = localStorage.getItem('error');
    localStorage.removeItem('error');

    if (errorType === 'email') {
        emailError();
    } else if (errorType === 'password') {
        wachtwoordError();
    } else if (errorType === 'account') {
        accountError();
    } else if(errorType === 'onjuist'){
        onjuistError();
    }
};

function emailError() {
    document.getElementById("email").style.display = "flex";
}

function wachtwoordError() {
    document.getElementById("wachtwoord").style.display = "flex";
}

function accountError() {
    document.getElementById("account").style.display = "flex";
}

function onjuistError() {
    document.getElementById("onjuist").style.display = "flex";
}
