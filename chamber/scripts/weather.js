// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastDiv = document.querySelector('#forecast');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49.749992&lon=6.637143&units=imperial&appid=7946f6125cde720d57febf005435b67f';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.749992&lon=6.637143&units=imperial&appid=7946f6125cde720d57febf005435b67f';

async function apiFetch() {
    try {
        const weatherResponse = await fetch(weatherUrl);
        const forecastResponse = await fetch(forecastUrl);

        if (weatherResponse.ok && forecastResponse.ok) {
            const weatherData = await weatherResponse.json();
            const forecastData = await forecastResponse.json();
            console.log(weatherData); // testing only
            console.log(forecastData); // testing only
            displayWeatherResults(weatherData);
            displayForecastResults(forecastData);
        } else {
            throw Error(await weatherResponse.text() + await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeatherResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecastResults(data) {
    const days = {};
    const forecastHTML = data.list.filter(forecast => {
        const date = new Date(forecast.dt * 1000);
        const day = date.toDateString();
        if (!days[day] && Object.keys(days).length < 3) {
            days[day] = forecast;
            return true;
        }
        return false;
    }).map(forecast => {
        const date = new Date(forecast.dt * 1000);
        const temp = forecast.main.temp;
        const desc = forecast.weather[0].description;
        const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

        return `
            <div class="forecast-day">
                <p>${date.toDateString()}</p>
                <img src="${iconsrc}" alt="${desc}">
                <p>${temp}&deg;F</p>
                <p>${desc}</p>
            </div>
        `;
    }).join('');

    forecastDiv.innerHTML = forecastHTML;
}
