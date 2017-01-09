var React = require('React');

var LoginView = React.createClass({
  render: function() {
    return(
        <div className="container login-container">
            <div className="login-box">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Correo Electrónico</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Correo Electrónico" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
                    <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                </form>
            </div>
        </div>

    )
  }
});

module.exports = LoginView;
