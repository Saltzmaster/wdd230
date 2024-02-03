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