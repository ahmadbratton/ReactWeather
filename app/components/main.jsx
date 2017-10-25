var React = require('react');
var Nav = require("app/components/nav.jsx");
const hi = 'hi';

var main = (props) => {
  return(
    <div>
      <Nav title='hi' />
      <div className="row" >
        <div className="columns medium-6 large-4 small-centered " >
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = main;
