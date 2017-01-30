var React = require('react');

var ajaxHelper = require('./helpers/ajax');

class TakeQuizListItem extends React.Component {

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
                        <div className="col-md-2 text-center">
                            <a className="text-to-speech-a" onClick={event => this.handleClick(this.props.question.text)}><i className="glyphicon glyphicon-volume-up"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                              <textarea name={this.props.question._id} className="col-md-12 take-quiz-textarea" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports  = TakeQuizListItem;
