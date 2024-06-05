async function loadSpotlightMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const members = data.members;
    const spotlightMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');

    // Shuffle the array and get the first 3 members
    const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());
    const selectedMembers = shuffled.slice(0, 3);

    const spotlightsDiv = document.getElementById('spotlights');
    spotlightsDiv.innerHTML = ''; // Clear any existing content

    selectedMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';

        memberDiv.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        spotlightsDiv.appendChild(memberDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadSpotlightMembers);
