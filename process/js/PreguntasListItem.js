var React = require('react');

class PreguntasListItem extends React.Component {
    render() {
        const questionNumer = parseInt(this.props.index) + 1;

        return (
            <div className="col-md-12 preguntas-list-item">
                <div className="col-md-12">
                    <h5>{`${questionNumer}.- ${this.props.question.text}`}</h5>
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
