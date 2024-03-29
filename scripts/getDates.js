// get current year
const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();

currentYearElement.innerHTML = `&copy;${currentYear}`;


// get last Motified date
const lastMotifiedElement = document.querySelector('#lastModified');
const lastMotified = document.lastModified;

lastMotifiedElement.innerHTML = `Last Motified: ${lastMotified}`;

document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var navLinks = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show-menu');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.querySelector('.dark-mode');
    var body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');
    });
});

function updateVisitCounter() {
    // Get the current visit count from localStorage
    let visitCount = localStorage.getItem('visitCount');
    
    // If the visit count is null (first visit), set it to 1, otherwise increment it
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    
    // Update the counter element
    document.getElementById('visits').textContent = visitCount;
    
    // Store the updated visit count in localStorage
    localStorage.setItem('visitCount', visitCount);
}

// Initialize the visit counter when the page loads
window.onload = function() {
    updateVisitCounter();
};

// Function to fetch weather data from an API
function getWeather(apiKey, location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`; // Using OpenWeatherMap API

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = data.weather[0];
        const temperature = Math.round(data.main.temp);
        const description = weather.main; // Change weather.description to weather.main
        const iconCode = weather.icon;

        // Update the weather element with the fetched data
        document.getElementById("weather").innerHTML = `
          <span>${temperature}&deg;F</span> - 
          <img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description}">
          ${description}
        `;
      })
      .catch(error => console.error(error));  // Handle errors
  }

  // Replace with your actual OpenWeatherMap API key
  const apiKey = "29083a07ba728d7767182df8c0008f29";

  // Get weather data for Kenai, AK
  getWeather(apiKey, "Kenai, AK, USA");