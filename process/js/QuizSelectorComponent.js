var React = require('React');
var Link = require('react-router').Link;

var SearchSidebarComponent = require('./SearchSidebarComponent');
var QuizList = require('./QuizList');

class QuizSelectorComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {filterText: '', activeIndex: 0};
        this.handleUserInput = this.handleUserInput.bind(this);
        this.setActiveItem = this.setActiveItem.bind(this);
    }

    handleUserInput(filterText) {
        this.setState({filterText});
    }

    setActiveItem(index) {
        this.setState({ activeIndex: index });
    }

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
        if(quiz.title.toLowerCase().indexOf(this.state.filterText.toLowerCase()) == -1) {
            return ;
        } else {
            return <QuizList onSetActive={this.setActiveItem} onQuizSelect={this.props.onQuizSelect} quiz={quiz} key={index} index={index} activeIndex={this.state.activeIndex} />
        }
    });

    return (
      <div id="quiz-wrapper">
          <div className="col-md-12 quiz-search-div">
            <a href="#" className="hover-change-color" title="Nuevo Quiz" style={linkStyle} data-toggle="modal" data-target="#newQuizModal"><i style={glyphStyle} className="glyphicon glyphicon-plus"></i></a>
            <SearchSidebarComponent filterText={this.state.filterText} onUserInput={this.handleUserInput} />
          </div>
          <ul className="sidebar-nav">
              {quizItems}
          </ul>
      </div>
    )
  }
}

module.exports = QuizSelectorComponent;
