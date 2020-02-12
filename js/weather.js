const api_url= 'http://api.openweathermap.org/data/2.5/weather?lat=-33.9258&lon=18.4232&appid=8aafc8ce235d0b557c0e033195fe71f6&units=metric';

async function getData() {
    const response = await fetch (api_url);
    const data = await response.json();
    const { name, weather, main, wind } = data;
    
    document.getElementById('city').textContent = name;
    document.getElementById('temp').textContent = main.temp;
    document.getElementById('desc').textContent = weather.description;
    document.getElementById('hum').textContent = main.humidity;
    document.getElementById('pressure').textContent = main.pressure;
    document.getElementById('wind').textContent = wind.speed;
    console.log(name);
    console.log (weather);
    console.log(main);
    console.log(wind);
}

getData();