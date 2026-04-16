const api_key = "2060c7f3860526fb4e10fec8037e8456";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".btn");
const weathicon = document.querySelector(".weath-icon")

async function checkweather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humi").innerHTML = data.main.humidity + "%";
    document.querySelector(".wd").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weathicon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weathicon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weathicon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weathicon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
     weathicon.src= "images/mist.png"
}
else if(data.weather[0].main=="Snow"){
     weathicon.src= "images/Snow.png"
}

}

btn.addEventListener('click', () => {
    checkweather(search.value)
})

