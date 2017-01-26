var React = require('react');

var ajaxHelper = require('./helpers/ajax');

class PreguntasListItem extends React.Component {

    handleClick(text) {
        ajaxHelper.textToSpeech(text);
    }

    render() {
        const questionNumer = parseInt(this.props.index) + 1;

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
                    <div className="col-md-12">
                        <h5><b>Tu respuesta:</b></h5>
                        <h5>{this.props.question.studentAnswer}</h5>
                        <hr />
                        <h5><b>Respuesta:</b></h5>
                        <h5>{this.props.question.answer}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports  = PreguntasListItem;
