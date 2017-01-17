var React = require('react');

class QuizDetail extends React.Component {


    render() {

        if(!this.props.quiz) {
            return <div>Loading...</div>;
        }

        const quizTitle = this.props.quiz.title;
        const quizDescription = this.props.quiz.description;

        const quizSubStyle = {
            fontSize: '16px'
        };

        const leftMargin = {
            marginLeft: '15px'
        };

        return (
            <div className="col-md-12">
                <div className="media">
                    <div className="media-left">
                        <img src="img/quiz.png" width="70" height="70" />
                    </div>
                    <div className="media-body">
                        <h3 className="quiz-name-header">{quizTitle}</h3>
                        <p className="quiz-name-sub" style={quizSubStyle}>{quizDescription}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">Preguntas</div>
                    {/* <hr />
                    <span></span> */}
                    <div style={leftMargin} className="col-md-3"></div>
                    <div style={leftMargin} className="col-md-9"></div>
                </div>
            </div>
        );
    }
}

module.exports = QuizDetail;
