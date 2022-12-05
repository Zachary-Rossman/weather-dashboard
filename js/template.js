let searchForm = document.querySelector("#searchForm");
let searchInput = document.querySelector("#searchInput");
let weatherCard = document.querySelector("#weatherCard");
let dogBreeds = document.querySelector("#dog-breeds");

//functions
// function init() {
//   fetch("https://dog.ceo/api/breeds/list/all")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(Object.keys(data.message));
//       let breeds = Object.keys(data.message);
//       breeds.forEach((breed) => {
//         let optTag = document.createElement("option");
//         optTag.innerHTML = `<option value="${breed}">${breed}</option>`;
//         dogBreeds.append(optTag);
//       });
//     });
// }

function handleFormSubmit(event) {
  event.preventDefault();
  weatherCard.innerHTML = ";"
  let locationRequestUrl = "api.openweathermap.org/data/2.5/forecast?id=524901&appid=19646f0f6fda25aa9456a943e1eda27b";
  fetch(locationRequestUrl, {})
    .then(function (response) {
      return response.json();
    })
    .then(function (location) {
let locationID = location.results.data[0].result_object.location_id;
console.log(locationID)
      let requestUrl = `api.openweathermap.org/data/2.5/forecast?id=524901&appid=19646f0f6fda25aa9456a943e1eda27b`;
      fetch(requestUrl, {
        method: "POST",
        headers: {
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          data.results.data.forEach((restaurant, index) => {
            if (index < 10) {
              let divTag = document.createElement("div");
              divTag.setAttribute("class", "p-2");
              divTag.innerHTML = `<h2> ${restaurant.name} </h2>`;
              divTag.innerHTML += `<img class="" src="${restaurant.photo.images.original.url}">`;
              weatherCard.append(divTag);
            }
          });
        });
    });
}

//event listeners
// init();

searchForm.addEventListener("submit", handleFormSubmit);