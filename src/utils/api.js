var axios = require('axios');

var _currentWeatherURL = 'http://api.weatherstack.com/current?access_key=d4dd0913626224fbf6071a1d008ff7cd&query=';
var _forecastURL = 'http://api.weatherstack.com/forecast?access_key=d4dd0913626224fbf6071a1d008ff7cd&query=';

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
    return axios.get(`${_forecastURL}` + location + '&forecast_days=5').then((response) => {
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
