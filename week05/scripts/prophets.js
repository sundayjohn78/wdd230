const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets); // Display the prophets data on the page
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Correct element is 'h2'
        let dateOfBirth = document.createElement('h3');
        let placeOfBirth = document.createElement('h3');
        let portrait = document.createElement('img');
        
        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Correct properties are 'name' and 'lastname'
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `place of Birth: ${prophet.birthplace}`;


        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // Correct properties are 'name' and 'lastname'
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        // Append the section(card) with the created elements
        card.appendChild(fullName); // Correct variable is 'fullName'
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

// Fetch and display the data
getProphetData(url);
