async function loadSpotlightMembers() {
    try {
        console.log('Fetching members.json...');
        const response = await fetch('data/members.json'); // Adjust path according to your structure
        
        if (!response.ok) {
            throw new Error('Failed to fetch members data');
        }

        const data = await response.json();
        console.log('Members data:', data);

        // Ensure data is an array
        if (!Array.isArray(data)) {
            throw new Error('Members data is not an array');
        }

        // Manually iterate to find members with "Gold" or "Silver" membership levels
        const qualifiedMembers = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].membership_level === 'Gold' || data[i].membership_level === 'Silver') {
                qualifiedMembers.push(data[i]);
            }
        }
        console.log('Qualified members:', qualifiedMembers);

        // Shuffle and select up to 3 members
        const shuffledMembers = qualifiedMembers.sort(() => 0.5 - Math.random());
        const selectedMembers = shuffledMembers.slice(0, 3);
        console.log('Selected members:', selectedMembers);

        const spotlightsDiv = document.querySelector('.cards2');
        console.log('Spotlights div:', spotlightsDiv);

        if (spotlightsDiv) {
            spotlightsDiv.innerHTML = ''; // Clear any existing content

            selectedMembers.forEach(member => {
                const memberSection = document.createElement('section');
                memberSection.className = 'card';

                memberSection.innerHTML = `
                    <h2>${member.name}</h2>
                    <div class="infodiv">
                        <img src="images/${member.image}" alt="${member.name}">
                        <p class="info">${member.address}</p>
                        <p class="info">${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                        <p class="info">${member.additional_info}</p>
                    </div>
                `;

                spotlightsDiv.appendChild(memberSection);
            });
        } else {
            console.error('Spotlights div not found');
        }
    } catch (error) {
        console.error('Error loading spotlight members:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadSpotlightMembers);
