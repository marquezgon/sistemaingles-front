var React = require('React');
var HeaderComponent = require('./HeaderComponent');
var LeftSidebarComponent = require('./LeftSidebarComponent');

class DashboardComponent extends React.Component {

  render() {
    return (
      <div>
      <HeaderComponent />
      <div id="wrapper">
        <LeftSidebarComponent />
        {/* <div id="sidebar-wrapper-right">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <h3 className="text-center h3-sidebar-brand">Historial</h3>
            </li>
            <li>
              <a href="/">Historial</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
    );
  }
}

module.exports = DashboardComponent;
