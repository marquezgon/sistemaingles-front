var $ = jQuery = require('jquery');
var React = require('react');

class ExamDetail extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        $('#takeExamModal').modal('show');
    }

    render() {

        if(!this.props.exam) {
            return <div>Loading...</div>;
        }

        const examTitle = this.props.exam.title;
        const examDescription = this.props.exam.description;

        const quizSubStyle = {
            fontSize: '16px'
        };

        const preguntasBorderColor = {
            borderBottom: '3px solid #3AC2A6'
        };

        const topMargin = {
            marginTop: '15px'
        };

        const topMargin20 = {
            marginTop: '20px'
        };

        return (
            <div className="col-md-12">
                <div className="media">
                    <div className="media-left">
                        <img src="img/quiz.png" width="70" height="70" />
                    </div>
                    <div className="media-body">
                        <h3 style={topMargin} className="quiz-name-header">{examTitle}</h3>
                        <p className="quiz-name-sub" style={quizSubStyle}>{examDescription}</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <h5><b>Libro:</b> {this.props.bookName}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={topMargin20} className="row">
                    {
                        this.props.exam.status === 1 ?
                        <div className="col-md-12">
                            <button type="button" onClick={this.handleClick} className="btn btn-success">TOMAR EXAMEN</button>
                        </div> :
                        <div>
                            <div className="col-md-12">
                                <h4 className="preguntasH4">Preguntas</h4>
                            </div>
                            <div style={preguntasBorderColor} className="col-md-3 preguntas-col-h4"></div>
                            <div className="col-md-9 preguntas-col-h4"></div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

module.exports = ExamDetail;
