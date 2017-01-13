var React = require('React');
var Link = require('react-router').Link;

var SearchSidebarComponent = require('./SearchSidebarComponent');
var QuizList = require('./QuizList');

class QuizSelectorComponent extends React.Component {

  render() {
    const glyphStyle = {
      top: '0px'
    }

    const linkStyle = {
      fontSize: '20px',
      float: 'right',
      padding: '0 4px',
      color: '#ccc'
    }

    return (
      <div id="quiz-wrapper">
          <div className="col-md-12 quiz-search-div">
            <Link title="Nuevo Quiz" style={linkStyle} to="/"><i style={glyphStyle} className="glyphicon glyphicon-plus"></i></Link>
            <SearchSidebarComponent />
          </div>
          <ul className="sidebar-nav">
            <QuizList  />
          </ul>
      </div>
    )
  }
}

module.exports = QuizSelectorComponent;
