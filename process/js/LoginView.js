var $ = jQuery = require('jquery');
var React = require('React');
var LoadingSpinnerComponent = require('./LoadingSpinnerComponent');

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLogging: false};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({isLogging: true, errMsg: null});

    const formData = $('#loginForm').serialize();

    $.ajax({
      type: 'POST',
      url: "http://localhost:8000/users/login",
      data: formData,
      success: function(data) {
        localStorage.setItem('sistema-ingles-token', data.token);
      }.bind(this),
      complete: function() {
        this.setState({isLogging: false});
      }.bind(this),
      error: function(jqXHR, textStatus, errorThrown) {
        this.setState({errMsg: jqXHR.responseJSON.message});
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="container login-container">
          <div className="login-box">
              <form id="loginForm" onSubmit={this.handleSubmit} className={this.state.isLogging ? "form-signin lower-opacity" : "form-signin"}>
                  <h2 className="form-signin-heading">Please sign in</h2>
                  <label htmlFor="inputEmail" className="sr-only">Correo Electrónico</label>
                  <input type="email" id="inputEmail" name="username" className="form-control" placeholder="Correo Electrónico" required autoFocus />
                  <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                  <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Contraseña" required />
                  <input id="inputButton" disabled={this.state.isLogging} type="submit" className="btn btn-success col-xs-offset-6 col-xs-6" value="Iniciar Sesión" />
                  {this.state.errMsg ? <span className="text-danger">{this.state.errMsg}</span> : null }
                  &nbsp;<hr />
              </form>
          </div>
          {(this.state.isLogging) ? <LoadingSpinnerComponent /> : null }
      </div>
    );
  }
}

module.exports = LoginView;
