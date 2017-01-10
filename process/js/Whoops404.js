var React = require('React');

var LoadingSpinnerComponent = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Whoops, route not found</h1>
      </div>
    )
  }
});

module.exports = LoadingSpinnerComponent;
