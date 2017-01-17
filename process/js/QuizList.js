var React = require('React');
var Link = require('react-router').Link;
var TimeAgo = require('react-timeago').default

class QuizList extends React.Component {
  render() {
    const fixedPadding = {
      paddingLeft: '5px',
      paddingRight: '5px'
    }

    const quizDate = this.props.quiz.created;
    const quizTitle = this.props.quiz.title;

    return (
      <li>
        <a href="#/">
          <div style={fixedPadding} className="col-md-12 quiz-col">
            <div style={fixedPadding} className="col-md-3">
              <img src="img/quiz.png" width="53" height="53" />
            </div>
            <div className="col-md-9 quiz-col-8">
                <div className='col-md-12' style={fixedPadding}>
                    <h3 className="quiz-name-header">{quizTitle}</h3>
                    <p className="quiz-name-sub"><TimeAgo date={quizDate} /></p>
                </div>
            </div>
          </div>
        </a>
      </li>
    )
  }
}

module.exports = QuizList;
