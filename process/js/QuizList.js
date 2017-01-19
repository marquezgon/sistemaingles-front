var React = require('React');
var Link = require('react-router').Link;
var TimeAgo = require('react-timeago').default
var spanishDates = require('react-timeago/lib/language-strings/es').default;
var buildFormatter = require('react-timeago/lib/formatters/buildFormatter').default;

class QuizList extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onQuizSelect(this.props.quiz);
        this.props.onSetActive(this.props.index);
    }

    render() {
        const fixedPadding = {
          paddingLeft: '5px',
          paddingRight: '5px'
        }

        const formatter = buildFormatter(spanishDates);

        const quizDate = this.props.quiz.created;
        const quizTitle = this.props.quiz.title.length <= 13 ? this.props.quiz.title : this.props.quiz.title.substring(0, 9) + "..." ;

        return (
          <li className="quiz-list-li" onClick={this.handleClick} >
              <div style={fixedPadding} className={this.props.activeIndex === this.props.index ? "col-md-12 quiz-col quiz-col-active" : "col-md-12 quiz-col" } >
                <div style={fixedPadding} className="col-md-2 quiz-list-padding-top">
                  <img src="img/quiz.png" width="40" height="40" />
                </div>
                <div className="col-md-8 quiz-col-8">
                    <div className='col-md-12' style={fixedPadding}>
                        <h3 className="quiz-name-header">{quizTitle}</h3>
                        <p className="quiz-name-sub"><TimeAgo date={quizDate} formatter={formatter} /></p>
                    </div>
                </div>
                { this.props.quiz.status === 2 ?
                    <div className="col-md-2 quiz-list-padding-top">
                        <i className="glyphicon glyphicon-ok"></i>
                    </div> : null
                }
              </div>
          </li>
        )
    }
}

module.exports = QuizList;
