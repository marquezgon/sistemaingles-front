var React = require('react');
var ReactDOM = require('react-dom');

var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');

var MainInterface = React.createClass({
  render: function() {
    return(
        <div className="container login-container">
           <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputEmail" className="sr-only">Correo Electrónico</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electrónico" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
           </form>
        </div>
    )
  }//render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('mainApp')
); //render
