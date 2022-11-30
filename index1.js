var loaction = document.querySelector(".location-heading");
var lat = document.querySelector(".lat-heading");
var long = document.querySelector(".long-heading");
var timezone = document.querySelector(".time-heading");
var windspeed = document.querySelector(".Wind-heading");
var pressure = document.querySelector(".Pressure-heading");
var humidity = document.querySelector(".Humidity-heading");
var windDirection = document.querySelector(".Wind-direction-heading");
var uv =document.querySelector(".uv-heading");
var feelslike = document.querySelector(".feels-heading");

function getRequestApi() {
    const apidata = "https://api.weatherstack.com/current?access_key=8cbec4b7aed04afe583c09d1d3330bf0&query=India"
    fetch(apidata)
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        var loactionname = data['location']['country'];
        var Lat = data['location']['lat'];
var time = data["location"]["timezone_id"];
var wind = data["current"]["wind_speed"];
var pressurevalue = data["current"]["pressure"];
var humidityvalue = data["current"]["humidity"];
var windDirectionvalue = data["current"]["wind_dir"]
var uvvalue = data["current"]["uv_index"];
var feelslikevalue = data["current"]["feelslike"];
var longvalue = data["location"]["lon"]
        loaction.innerHTML = `Location: ${loactionname}`
        lat.innerHTML = `Lat: ${Lat}`
        timezone.innerHTML = `Time Zone:${time}`
        windspeed.innerHTML = `Wind Speed: ${wind}`
        pressure.innerHTML = `Pressure:${pressurevalue}`
        humidity.innerHTML = `Humidity:${humidityvalue}`
        windDirection.innerHTML = `Wind Direction:${windDirectionvalue}`
        uv.innerHTML = `UV Index:${uvvalue}`
        feelslike.innerHTML = `Feels Like:${feelslikevalue}`
        long.innerHTML = `Long:${longvalue}`
    })
}
