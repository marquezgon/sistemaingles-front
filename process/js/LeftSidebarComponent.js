var React = require('React');
var Link = require('react-router').Link;
var NavLinkComponent = require('./NavLinkComponent')

class LeftSidebarComponent extends React.Component {
  render() {
    return (
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav left-sidebar-ul">
            <NavLinkComponent to="/">
              <i className="glyphicon glyphicon-pencil nav-link-i"></i> <span>Quiz</span>
            </NavLinkComponent>
            <NavLinkComponent to="/exam">
              <i className="glyphicon glyphicon-list-alt nav-link-i"></i> <span>Examen</span>
            </NavLinkComponent>
          </ul>
      </div>
    )
  }
}

module.exports = LeftSidebarComponent;
