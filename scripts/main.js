const container = document.querySelector(".countries-wrapper");

const countriesAPI = 'https://restcountries.com/v2/all';
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.textContent = country.name
        container.appendChild(countryDiv)

    })
    const countriesTotal = document.querySelector("#total-countries")
    countriesTotal.textContent = `Total Number of countries: ${data.length}`
})
  .catch(error => console.log(error));




