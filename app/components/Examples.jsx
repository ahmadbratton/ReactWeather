var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
  return(
    <div>
    <h1 className="text-center page-title " >Examples</h1>
    <p> here are a few example locations to try out: </p>
    <ol>
      <li>
        <Link to="/?atlanta" > atlanta, Ga </Link>
      </li>
      <li>
        <Link to="/?mexico" > mexico, mexico city  </Link>
      </li>
    </ol>

  </div>
  )
}

module.exports = Examples;
