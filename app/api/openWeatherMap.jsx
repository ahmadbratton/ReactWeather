var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather?appid=541583cc770ff45be3223db7fcc3f520&units=imperial";



module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error(err.res.data.message)
    })

  }
}
