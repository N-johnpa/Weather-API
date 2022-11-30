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
    // const apidata = "https://api.weatherstack.com/current?access_key=8cbec4b7aed04afe583c09d1d3330bf0&query=India"
    const apidata = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=29HR462Q77SWVW363AVXYAR4B&contentType=json"
    fetch(apidata)
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        console.log(data);
       
        var loactionname = data["address"];
        var Lat = data["latitude"];
var time = data["timezone"];
var wind = data["currentConditions"]["windspeed"];
var pressurevalue = data["currentConditions"]["pressure"];
var humidityvalue = data["currentConditions"]["humidity"];
var windDirectionvalue = data["currentConditions"]["winddir"]
var uvvalue = data["currentConditions"]["uvindex"];
var feelslikevalue = data["currentConditions"]["feelslike"];
var longvalue = data["longitude"]
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
