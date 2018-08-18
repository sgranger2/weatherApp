var axios = require('axios');

var _currentWeatherURL = 'https://api.apixu.com/v1/current.json?key=56b51956b6a5486a852145612181307&q=';
var _forecastURL = 'https://api.apixu.com/v1/forecast.json?key=56b51956b6a5486a852145612181307&q=';

module.exports = {
  getCurrentWeather: (location) => {
    return axios.get(`${_currentWeatherURL}` + location).then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
      else if (error.request) {
        console.log(error.request);
      }
    });
  },
  getForecast: (location) => {
    return axios.get(`${_forecastURL}` + location + '&days=5').then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
      else if (error.request) {
        console.log(error.request);
      }
    });
  }
};
