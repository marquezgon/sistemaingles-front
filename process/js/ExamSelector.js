var React = require('React');
var Link = require('react-router').Link;

var SearchSidebarComponent = require('./SearchSidebarComponent');
var ExamList = require('./ExamList');

class ExamSelectorComponent extends React.Component {

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

    const height = this.props.exams.length > 12 ? (60 * 59.8)+'px' : '100%';
    const ulHeight = {
        height: height,
        overflowY: 'auto'
    }

    const examItems = this.props.exams.map((exam, index) => {
        if(exam.title.toLowerCase().indexOf(this.state.filterText.toLowerCase()) == -1) {
            return ;
        } else {
            return <ExamList onQuizDelete={this.props.onQuizDelete} onSetActive={this.setActiveItem} onExamSelect={this.props.onExamSelect} exam={exam} key={index} index={index} activeIndex={this.state.activeIndex} />
        }
    });

    return (
      <div className="quiz-wrapper">
          <div className="col-md-12 quiz-search-div">
            <a href="#" className="hover-change-color" title="Nuevo Quiz" style={linkStyle} data-toggle="modal" data-target="#newQuizModal"><i style={glyphStyle} className="glyphicon glyphicon-plus"></i></a>
            <SearchSidebarComponent filterText={this.state.filterText} onUserInput={this.handleUserInput} />
          </div>
          <ul className="sidebar-nav" style={ulHeight}>
              {examItems}
          </ul>
      </div>
    )
  }
}

module.exports = ExamSelectorComponent;
