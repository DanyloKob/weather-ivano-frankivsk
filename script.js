const apiKey = '5c245483d4f6454fbda173900232406';
const city = 'Ivano-Frankivsk';
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

function updateWeatherForecast() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const forecastElement = document.getElementById('forecast');
      forecastElement.innerHTML = '';

      const forecastDays = data.forecast.forecastday;

      forecastDays.forEach(day => {
        const date = day.date;
        const temperature = day.day.avgtemp_c;
        const condition = day.day.condition.text;
        const icon = day.day.condition.icon;

        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';

        const dateElement = document.createElement('p');
        dateElement.textContent = date;
        forecastItem.appendChild(dateElement);

        const iconElement = document.createElement('img');
        iconElement.src = 'https:' + icon;
        forecastItem.appendChild(iconElement);

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `Температура: ${temperature}°C`;
        forecastItem.appendChild(temperatureElement);

        const conditionElement = document.createElement('p');
        conditionElement.textContent = `Стан погоди: ${condition}`;
        forecastItem.appendChild(conditionElement);

        forecastElement.appendChild(forecastItem);
      });
    })
    .catch(error => {
      console.log('Виникла помилка:', error);
    });
}

updateWeatherForecast();

setInterval(updateWeatherForecast, 24 * 60 * 60 * 1000);
