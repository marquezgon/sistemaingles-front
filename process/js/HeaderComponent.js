var $ = jQuery = require('jQuery');
var React = require('React');
var Link = require('react-router').Link;

class HeaderComponent extends React.Component {

    toggleModal() {
        $('#updateProfileModal').modal('show');
    }

    render() {
        return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">Logo</Link>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#" id="nav-profile-pic" className="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <img src="https://s3.amazonaws.com/mexerp-sistema-ingles/round-profile-pic.png" height="60" width="60" />
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="profile-a" onClick={event => this.toggleModal()}>Perfil</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Cerrar Sesión</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

module.exports = HeaderComponent;
