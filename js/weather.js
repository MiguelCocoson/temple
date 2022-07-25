const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');

const url = `https://api.openweathermap.org/data/2.5/weather?id=5781860&units=Imperial&appid=089a0425418df44f4f7f73e6e3f15ad9`;
  
apiFetch(url);

async function apiFetch(apiURL) {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
};

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);

    let iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    if (weatherData.weather[0].main == 'Clear') {
        iconsrc = "../temple/images/clear.png";
    } else if (weatherData.weather[0].main == 'Thunderstorm') {
        iconsrc = "../temple/images/thunderstorm.png";
    } else if (weatherData.weather[0].main == 'Drizzle') {
        iconsrc = "../temple/images/drizzle.png";
    } else if (weatherData.weather[0].main == 'Rain') {
        iconsrc = "../temple/images/rain.png";
    } else if (weatherData.weather[0].main == 'Snow') {
        iconsrc = "../temple/images/snow.png";
    } else if (weatherData.weather[0].main == 'Clouds') {
        iconsrc = "../temple/images/clouds.png";
    } else {
        iconsrc = "../temple/images/weather.png";
    }

    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();

    let temperature = weatherData.main.temp.toFixed(1);
    let humidity = weatherData.main.humidity;

    document.querySelector('#humidity').innerHTML = 'Humidity is: ' + humidity + '%';
}