var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router")
var main = require("main");
var Weather = require("app/components/Weather.jsx");
var About = require("app/components/about.jsx");
var Examples = require("app/components/Examples.jsx");


//Load foundation
require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={main}>
    <Route path="about" component={About}/>
    <Route path="Examples" component={Examples}/>
    <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
