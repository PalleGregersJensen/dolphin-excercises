"use strict";

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
    document.querySelector("#login-dialog").showModal();
    showModal();
}

function showModal() {
    document.querySelector("#dialog-button").addEventListener("click", userLogin)
    console.log("show modal vises");
}

function userLogin() {  
    console.log("ok button clicked");
    if (
    document.querySelector("#username-input").value === "admin" ||
    document.querySelector("#username-input").value === "user" ||
    document.querySelector("#username-input").value === "coach"
  ) {
    console.log("login");
  } else {
    document.querySelector("#login-failed").textContent =
      "Login fejlede. Prøv igen";
  }
}
