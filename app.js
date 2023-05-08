"use strict"

window.addEventListener("load", initApp);

function initApp() {
    console.log("JS kører");
    document.querySelector("#guest-login").addEventListener("click", guest);
    document.querySelector("#user-login").addEventListener("click", user);
}

function guest() {
    console.log("Fortsæt som gæst");
} 

function user() {
    console.log("Login som bruger");
}