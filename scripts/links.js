const linksURL = "https://sundayjohn78.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

const displayLinks = (weeks) => {
    let learningActivitiesSection = document.createElement('section');
    learningActivitiesSection.className = "card";

    let heading = document.createElement('h2');
    heading.textContent = "Learning Activities";

    let list = document.createElement('ul');

    weeks.forEach((week) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            let a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;

            listItem.appendChild(a);

            if (index < week.links.length - 1) {
                let separator = document.createTextNode(' | ');
                listItem.appendChild(separator);
            }
        });

        list.appendChild(listItem);
    });

    learningActivitiesSection.appendChild(heading);
    learningActivitiesSection.appendChild(list);

    let cardsContainer = document.querySelector('.cards');
    cardsContainer.insertBefore(learningActivitiesSection, cardsContainer.firstChild);
}

getLinks(linksURL);
