var React = require('react');
var QuizDetail = require('./QuizDetail');
var LoadingSpinnerComponent = require('./LoadingSpinnerComponent');
var PreguntasListItem = require('./PreguntasListItem');

class MainQuizContainer extends React.Component {
    render() {

        const quiz = this.props.quiz;

        if(!quiz) {
            return <LoadingSpinnerComponent type="quiz" />;
        }

        console.log(quiz);

        const preguntasListDiv = {
            marginTop: '30px'
        };

        const preguntasItems = quiz.questions.map((item, index) => {
            return <PreguntasListItem key={index} question={item} index={index} />
        });

        return (
            <div>
                <QuizDetail bookName={this.props.bookName} sectionNames={this.props.sectionNames} quiz={quiz} />
                { quiz.status === 0 ?
                    <div className="col-md-12" style={preguntasListDiv}>
                        {preguntasItems}
                    </div> : null
                }
            </div>
        );
    }
}

module.exports = MainQuizContainer;
