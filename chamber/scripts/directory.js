document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector("#directory");

    gridButton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        });

    function displayMembers(members) {
        members.forEach(member => {
            const memberSection = document.createElement("section");
            memberSection.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>Level: ${member.membership_level}</p>
                <p>${member.additional_info}</p>
            `;
            display.appendChild(memberSection);
        });
    }
});
