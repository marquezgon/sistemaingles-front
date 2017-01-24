var React = require('React');

var LoadingSpinnerComponent = React.createClass({
  render: function() {

      const quizStyles = {
          paddingTop: '280px',
          bottom: '0'
      }

      const quizModalStyles = {
          bottom: '0'
      }

      return (

          <div style={this.props.type === "quiz" ? quizStyles : this.props.type === "quizModal" ? quizModalStyles : null } className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
          </div>
      )
    }
});

module.exports = LoadingSpinnerComponent;
