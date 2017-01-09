var React = require('React');

var LoadingSpinnerComponent = React.createClass({
  render: function() {
    return(
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    )
  }
});

module.exports = LoadingSpinnerComponent;
