const baseURL = "https://sundayjohn78.github.io/wdd230/";
const linksURL = "https://sundayjohn78.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }
const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Correct element is 'h2'
        let list = document.createElement('ul');
        let innerList = document.createElement('li');
        let link = document.createElement('a')
        
        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `Learning Activities`; // Correct properties are 'name' and 'lastname'
        innerList.textContent = `${week.week}`;
        link.textContent =`${week.title}`;

        list.appendChild('innerList');
        innerList.appendChild('link')
    });
}
getLinks(linksURL);