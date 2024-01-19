// get current year
const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();

currentYearElement.innerHTML = `&copy;${currentYear}`;


// get last Motified date
const lastMotifiedElement = document.querySelector('#lastModified');
const lastMotified = document.lastModified;

lastMotifiedElement.innerHTML = `Last Motified: ${lastMotified}`;