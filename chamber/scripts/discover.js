document.addEventListener("DOMContentLoaded", function() {
    // Check if this is the user's first visit
    if (!localStorage.getItem("lastVisit")) {
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        // Calculate days since last visit
        const lastVisit = new Date(localStorage.getItem("lastVisit"));
        const today = new Date();
        const daysSinceLastVisit = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));

        // Display appropriate message based on days since last visit
        if (daysSinceLastVisit < 1) {
            displayMessage("Back so soon! Awesome!");
        } else {
            let message;
            if (daysSinceLastVisit === 1) {
                message = `You last visited ${daysSinceLastVisit} day ago.`;
            } else {
                message = `You last visited ${daysSinceLastVisit} days ago.`;
            }
            displayMessage(message);
        }
    }

    // Update localStorage with current visit date
    localStorage.setItem("lastVisit", new Date());
});

function displayMessage(message) {
    const sidebarContent = document.querySelector(".visits");
    sidebarContent.textContent = message;
}
