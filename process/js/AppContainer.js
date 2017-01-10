var React = require('React');
var LoginComponent = require('./LoginComponent');
var DashboardComponent = require('./DashboardComponent');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  render() {
    return (
      <div>
        {
          (this.props.location.pathname === '/') ? <DashboardComponent /> : <LoginComponent />
        }
      </div>
    );
  }
}

module.exports = AppContainer;
