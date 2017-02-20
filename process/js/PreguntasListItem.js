var React = require('react');

var ajaxHelper = require('./helpers/ajax');

class PreguntasListItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {status: this.props.question.status};
        this.markAnswer = this.markAnswer.bind(this);
    }

    handleClick(text) {
        ajaxHelper.textToSpeech(text);
    }

    markAnswer(status) {
        const questionId = this.props.question._id;
        const quizId = this.props.quiz;
        ajaxHelper.markAnswer(status, questionId, quizId, this);
    }

    render() {
        const questionNumer = parseInt(this.props.index) + 1;

        let markCorrect = 'mark-correct';
        let markWrong = 'mark-wrong';

        switch(this.state.status) {
            case '1':
                markCorrect = 'mark-correct selected';
                markWrong = 'mark-wrong';
                break;
            case '2':
                markCorrect = 'mark-correct';
                markWrong = 'mark-wrong selected';
                break;
        }

        return (
            <div className="col-md-12 preguntas-list-item">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-10">
                            <h5>{`${questionNumer}.- ${this.props.question.text}`}</h5>
                        </div>
                        <div className="col-md-2">
                            <a className="text-to-speech-a" onClick={event => this.handleClick(this.props.question.text)}><i className="glyphicon glyphicon-volume-up"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <h5><b>Tu respuesta:</b></h5>
                        </div>
                        <div className="col-md-2">
                            <a className={markCorrect} onClick={event => this.markAnswer('1')}><i className="glyphicon glyphicon-heart"></i></a>
                            <a className={markWrong} onClick={event => this.markAnswer('2')}><i className="glyphicon glyphicon-remove"></i></a>
                        </div>
                        <div className="col-md-10">
                            <h5>{this.props.question.studentAnswer}</h5>
                        </div>
                        <div className="col-md-12">
                            <hr />
                        </div>
                        <div className="col-md-12">
                            <h5><b>Respuesta:</b></h5>
                        </div>
                        <div className="col-md-10">
                            <h5>{this.props.question.answer}</h5>
                        </div>
                        <div className="col-md-2">
                            <a className="text-to-speech-a" onClick={event => this.handleClick(this.props.question.answer)}><i className="glyphicon glyphicon-volume-up"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports  = PreguntasListItem;
