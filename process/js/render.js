var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');

var React = require('react');
var ReactDOM = require('react-dom');
var LoginView = require('./LoginView');

var MainInterface = React.createClass({
  render: function() {
    return (
      <LoginView />
    )
  }//render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('mainApp')
); //render
