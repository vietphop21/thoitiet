var search = document.querySelector('.search')
var country = document.querySelector('.country')
var city = document.querySelector('.city')
var time = document.querySelector('.time')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short_desc')
var speed = document.querySelector('.speed span')
var deg = document.querySelector('.deg span')
var gust = document.querySelector('.gust span')
var weather = document.querySelector('.he_weather')
async function changeWeather() {

    let vitri = search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${vitri} &appid=299d1bf1dc61919aaf339332b17660d6`
    let data = await fetch(apiURL).then(res => res.json());
    console.log(data);
    city.innerHTML = data.name;
    country.innerText = data.sys.country;
    speed.innerText = data.wind.speed;
    deg.innerText = data.wind.deg;
    gust.innerText = data.wind.gust;
    let temp = value.innerText = (data.main.temp - 273.15).toFixed()
    shortDesc.innerText = data.weather[0].main
    time.innerText = new Date().toLocaleDateString('vi')
    console.log(temp)
    if ( temp > 23) {
        weather.setAttribute('class', 'he_weather');
    }
    else if (20<=temp<=23)
    {
        weather.setAttribute('class','xuan_weather');
    }
    else if (10<=temp<=19)
    {
        weather.setAttribute('class','thu_weather');
    }
    else if ( temp=== 5)
    {
        weather.setAttribute('class','dong_weather');
    }
}
  

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        changeWeather();
    }
})

 