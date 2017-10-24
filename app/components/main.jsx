var React = require('react');
var Nav = require("app/components/nav.jsx");


var main = (props) => {
  return(
    <div>
      <Nav/>
      <h2> main component </h2>
      {props.children}
    </div>
  );
}

module.exports = main;
