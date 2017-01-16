var $ = jQuery = require('jquery');
var React = require('React');
var HeaderComponent = require('./HeaderComponent');
var LeftSidebarComponent = require('./LeftSidebarComponent');
var QuizSelectorComponent = require('./QuizSelectorComponent');

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {quizes: []};
    }

    componentDidMount() {
        $.ajax({
          type: 'GET',
          url: "http://localhost:8000/quiz",
          headers: {
              "Authorization":`Bearer ${localStorage.mexEngToken}`,
          },
          success: function(quizes) {
              this.setState({quizes});
          }.bind(this),
          complete: function() {

          }.bind(this),
          error: function(jqXHR, textStatus, errorThrown) {
          }.bind(this)
        });
    }

    render() {
    return (
      <div>
      <HeaderComponent />
      <div id="wrapper">
        <LeftSidebarComponent />
        <QuizSelectorComponent quizes={this.state.quizes} />
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
