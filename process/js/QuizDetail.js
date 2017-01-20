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

        const preguntasBorderColor = {
            borderBottom: '3px solid #3AC2A6'
        };

        const topMargin = {
            marginTop: '15px'
        };

        const topMargin30 = {
            marginTop: '30px'
        };

        return (
            <div className="col-md-12">
                <div className="media">
                    <div className="media-left">
                        <img src="img/quiz.png" width="70" height="70" />
                    </div>
                    <div className="media-body">
                        <h3 style={topMargin} className="quiz-name-header">{quizTitle}</h3>
                        <p className="quiz-name-sub" style={quizSubStyle}>{quizDescription}</p>
                    </div>
                </div>
                <div style={topMargin30} className="row">
                    <div className="col-md-12"><h4 className="preguntasH4">Preguntas</h4></div>
                    {/* <hr />
                    <span></span> */}
                    <div style={preguntasBorderColor} className="col-md-3 preguntas-col-h4"></div>
                    <div className="col-md-9 preguntas-col-h4"></div>
                </div>
            </div>
        );
    }
}

module.exports = QuizDetail;