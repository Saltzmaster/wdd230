document.getElementById("last-modification-date").textContent = new Date().toLocaleDateString();
document.addEventListener("DOMContentLoaded", function () {
    const viewToggle = document.getElementById("view-toggle");
    const membersContainer = document.getElementById("members-container");

    // Load JSON data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displayMembers(data); // Display members initially
            viewToggle.addEventListener("change", () => {
                displayMembers(data); // Display members based on selected view
            });
        })
        .catch(error => console.error("Error loading members:", error));

    // Function to display members based on selected view
    function displayMembers(data) {
        const selectedView = viewToggle.value;
        membersContainer.className = `members-container ${selectedView}-view`; // Update container class for view toggle

        membersContainer.innerHTML = ""; // Clear previous content

        data.forEach(member => {
            const memberCard = createMemberCard(member);
            membersContainer.appendChild(memberCard);
        });
    }

    // Function to create a member card
    function createMemberCard(member) {
        const card = document.createElement("div");
        card.classList.add("member-card");

        const image = document.createElement("img");
        image.src = member.image;
        image.alt = member.name;

        const name = document.createElement("h2");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = `${member.address.street}, ${member.address.city}, ${member.address.state} ${member.address.zip}`;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = member.website;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        return card;
    }
});