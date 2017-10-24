var React = require("react");

var WeatherMessage = ({temp, location}) => {
  
  return(

    <p>its {temp} in {location} </p>

  )

}

module.exports = WeatherMessage;
