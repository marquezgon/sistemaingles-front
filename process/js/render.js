var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var AppContainer = require('./AppContainer');
var Whoops404 = require('./Whoops404');
var DashboardComponent = require('./DashboardComponent');
var ExamDashboard = require('./ExamDashboard');
var auth = require('./auth');

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

class MainInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: auth.loggedIn()};
  }

  render() {
    return (
        <ReactRouter.Router history={ReactRouter.hashHistory}>
          <ReactRouter.Route path="/" component={AppContainer} onEnter={requireAuth} >
            <ReactRouter.Route path="quiz" component={DashboardComponent} onEnter={requireAuth} />
            <ReactRouter.Route path="exam" component={ExamDashboard} onEnter={requireAuth} />
          </ReactRouter.Route>
          <ReactRouter.Route path="/login" component={AppContainer} />
          <ReactRouter.Route path="/*" component={Whoops404} />
        </ReactRouter.Router>
    );
  }
}

ReactDOM.render(
  <MainInterface />,
  document.getElementById('mainApp')
); //render
