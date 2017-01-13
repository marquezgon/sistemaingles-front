var React = require('React');
var Link = require('react-router').Link;

class QuizList extends React.Component {
  render() {
    const fixedPaddingLeft = {
      paddingLeft: '5px'
    }

    return (
      <li>
        <a href="#/">
          <div style={fixedPaddingLeft} className="col-md-12 quiz-col">
            <div style={fixedPaddingLeft} className="col-md-4">
              <img src="img/quiz.png" width="60" height="60" />
            </div>
            <div className="col-md-8 quiz-col-8">
              amigo
            </div>
          </div>
        </a>
      </li>
    )
  }
}

module.exports = QuizList;
