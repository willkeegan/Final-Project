import React from 'react';

export default function Weather() {

  fetch('https://namey.muffinlabs.com/name.json?', { mode: 'cors' })
          .then(function(d) { return d.json(); })
          .then(function(d) {
            pushBabyName(d)
	          console.log(d)
	        });
    
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=35.9132&lon=-79.0558&appid=57a0a94dc910ede17013fdbebbdb242c')  
        
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
        //console.log(data);
        pushWeather(data);
  })
    .catch(function() {
    // catch any errors


  });

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    pushQuote(data);
  });

  fetch(" https://nba-players.herokuapp.com/players-stats-teams/cha")
  .then(function(response) {
    //console.log(response)
    return response.json();
  })
  .then(function(data) {
    // console.log(data)
    pushNBA(data);
  });

    return(

        <div>
            {/* <h2>Temp: {weatherData.main.temp}</h2> */}
            {/* <subtitle>Humidity: {weatherData.main.humidity}</subtitle>
            <subtitle>Conditions: {weatherData.main.weather.main}</subtitle> */}
        </div>
  );
}

function pushWeather(data) {
    document.getElementById('temp').innerHTML = "Temperature: " + Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32);
    document.getElementById('humidity').innerHTML = "Humidity: " + data.main.humidity;
    document.getElementById('conditions').innerHTML = "Conditions: " + data.weather[0].description
}

function pushQuote(data) {
    let num = Math.floor(Math.random() * 10)
    document.getElementById('Inspiration').innerHTML = "Inspirational Quote OTD: " + data[num].text + " - " + data[num].author;
}

function pushNBA(data) {
  let num = Math.floor(Math.random() * 10)
  document.getElementById('NBA-Stats').innerHTML = data[num].name + " wants you to win!";
}

function pushBabyName(data) {
  document.getElementById('BabyName').innerHTML = data;
}