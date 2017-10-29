var React = require("react");
var WeatherForm = require("app/components/WeatherForm.jsx");
var WeatherMessage = require("app/components/WeatherMessage.jsx");
var openWeatherMap = require("app/api/openWeatherMap.jsx");
var ErrorModal = require("app/components/ErrorModal.jsx");
var Weather = React.createClass({

  getInitialState: function() {
    return {isLoading: false}
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });

    }, function(e) {
      that.setState({
        isLoading:false,
        errorMessage: e.message
      });
    });

  },
  render: function() {

    var {isLoading, temp, location, errorMessage} = this.state;


    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center" >fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }

    }

    function renderError() {
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }

    }

    return (
      <div>
        <h1 className="text-center page-title ">get weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather;
