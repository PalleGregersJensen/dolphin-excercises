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
    okButtonClicked();
}

function okButtonClicked() {
    document.querySelector("#dialog-button").addEventListener("click", userLogin)
    console.log("ok button clicked");
}

function userLogin() {  
    if (
    document.querySelector("#username").value === "admin" ||
    document.querySelector("#username").value === "user" ||
    document.querySelector("#username").value === "coach"
  ) {
    console.log("login");
  } else {
    document.querySelector("#login-failed").textContent =
      "Login fejlede. Prøv igen";
  }
}
