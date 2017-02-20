var React = require('React');
var Link = require('react-router').Link;
var TimeAgo = require('react-timeago').default
var spanishDates = require('react-timeago/lib/language-strings/es').default;
var buildFormatter = require('react-timeago/lib/formatters/buildFormatter').default;

class ExamList extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //we check to see if event target is delete button
        //if so, we call onQuizDelete
        if(event.target.className === "delete-quiz" && event.target.tagName === "A") {
            this.props.onExamDelete(this.props.exam);
        } else {
            this.props.onExamSelect(this.props.exam);
            this.props.onSetActive(this.props.index);
        }
    }

    render() {
        const fixedPadding = {
          paddingLeft: '5px',
          paddingRight: '5px'
        }

        const formatter = buildFormatter(spanishDates);

        const examDate = this.props.exam.created;
        const examTitle = this.props.exam.title.length <= 13 ? this.props.exam.title : this.props.exam.title.substring(0, 9) + "..." ;

        return (
          <li ref="li" className="quiz-list-li" onClick={this.handleClick} >
              <div style={fixedPadding} className={this.props.activeIndex === this.props.index ? "col-md-12 quiz-col quiz-col-active" : "col-md-12 quiz-col" } >
                <div style={fixedPadding} className="col-md-2 quiz-list-padding-top">
                  <img src="img/quiz.png" width="40" height="40" />
                </div>
                <div className="col-md-8 quiz-col-8">
                    <div className='col-md-12' style={fixedPadding}>
                        <h3 className="quiz-name-header">{examTitle}</h3>
                        <p className="quiz-name-sub"><TimeAgo date={examDate} formatter={formatter} /></p>
                    </div>
                </div>
                <div className="col-md-2">
                    <a className="delete-quiz">x</a>
                    { this.props.exam.status === 0 ?
                        <i className="quiz-glyphicon-ok glyphicon glyphicon-ok"></i> :
                        null
                    }
                </div>
              </div>
          </li>
        )
    }
}

module.exports = ExamList;
