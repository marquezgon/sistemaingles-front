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
      color: '#ccc',
      outline: 'none'
    }

    const quizItems = this.props.quizes.map((quiz, index) => {
        return <QuizList quiz={quiz} key={index} />
    });

    return (
      <div id="quiz-wrapper">
          <div className="col-md-12 quiz-search-div">
            <a href="#" className="hover-change-color" title="Nuevo Quiz" style={linkStyle} data-toggle="modal" data-target="#newQuizModal"><i style={glyphStyle} className="glyphicon glyphicon-plus"></i></a>
            <SearchSidebarComponent />
          </div>
          <ul className="sidebar-nav">
              {quizItems}
          </ul>
      </div>
    )
  }
}

module.exports = QuizSelectorComponent;
