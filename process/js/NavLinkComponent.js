var React = require('React');
var Link = require('react-router').Link;

class NavLinkComponent extends React.Component {
  render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "active" : "";

        return (
            <li className={className}>
                <Link {...this.props} activeClassName="active">
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

NavLinkComponent.contextTypes = {
  router: React.PropTypes.object
}

module.exports = NavLinkComponent;
