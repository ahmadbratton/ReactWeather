var React = require("react");



var about = (props) => {
  return(
    <div>
      <h1 className="text-center" > About </h1>
      <p> weather that built while learning react </p>
      <p>here are some of the tools I used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" > react </a> - this was the javaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org"> open weather map </a> I used open weather
          map to search for city name 
        </li>
      </ul>
    </div>
  )
}



module.exports = about;
