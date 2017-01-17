var React = require('react');
var QuizDetail = require('./QuizDetail');

class MainQuizContainer extends React.Component {
    render() {
        return (
            <div className="quiz-container">
                <div className="quiz-subcontainer">
                    <QuizDetail quiz={this.props.quiz} />
                </div>
            </div>
        );
    }
}

module.exports = MainQuizContainer;
