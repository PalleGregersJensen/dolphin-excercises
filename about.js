"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://dummy-movieobjects-default-rtdb.firebaseio.com/";

async function initApp() {
    console.log("JS kører");
    const movies = await getData();
    prepareDataObject(movies);
    const movieArray = prepareDataObject(movies);
    for (const movie of movieArray) {
        showMovie(movie)
    }
}

async function getData() {
  const response = await fetch(`${endpoint}/movies.json`);
  console.log(response);
  const dataObject = await response.json();
  console.log(dataObject);
  return dataObject;
}

// ========== Objekt til array ========== //
function prepareDataObject(dataObject) {
  const movieArray = [];
  for (const key in dataObject) {
    const movie = dataObject[key];
    movie.id = key;
    movieArray.push(movie);
  }
  console.log(movieArray);
  return movieArray;
}

function showMovie(movieObject) {
    console.log(movieObject);
    document.querySelector("#movie-table").insertAdjacentHTML(
        "beforeend",
    /*html*/ `
    <tr>
      <img src=${movieObject.image}>
      <th>${movieObject.title}</th>
      <th>${movieObject.description}</th>
      <button class="btn-delete">Delete</button>
      <button class="btn-update">Update</button>
    </tr>
    `
    )
};

 // add event listeners to detail view
//   document.querySelector("#movie-table table:last-child").addEventListener("click", movieClicked);
