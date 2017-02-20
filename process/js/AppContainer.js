var React = require('React');
var LoginComponent = require('./LoginComponent');
var DashboardComponent = require('./DashboardComponent');
var HeaderComponent = require('./HeaderComponent');
var LeftSidebarComponent = require('./LeftSidebarComponent');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
      if(this.props.location.pathname === '/quiz' || this.props.location.pathname === '/exam') {
          return (
              <div>
                  <HeaderComponent />
                  <div id="wrapper">
                      <LeftSidebarComponent />
                      {this.props.children}
                  </div>
              </div>
          );
      } else {
          return <LoginComponent />
      }
  }
}

module.exports = AppContainer;
