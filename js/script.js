// Global Variables

let searchForm = document.querySelector("#searchForm");
let searchInput = document.querySelector("#searchInput");

// Functions

function handleFormSubmit(event){
  event.preventDefault();
  weatherCard.innerHTML = `;`
  let locationRequestUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=19646f0f6fda25aa9456a943e1eda27b`;
  fetch(locationRequestUrl, {})
  .then(function(response) {
    return response.json();
  })
}

// Event Listeners & Function Calls

searchForm.addEventListener("submit", handleFormSubmit);