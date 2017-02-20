var React = require('react');
var ExamDetail = require('./ExamDetail');
var LoadingSpinnerComponent = require('./LoadingSpinnerComponent');
var PreguntasListItem = require('./PreguntasListItem');

class MainExamContainer extends React.Component {
    render() {
        const exam = this.props.exam;

        if(!exam) {
            return <LoadingSpinnerComponent type="quiz" />;
        }

        const preguntasListDiv = {
            marginTop: '30px'
        };

        const preguntasItems = exam.questions.map((item, index) => {
            return <PreguntasListItem key={index} question={item} index={index} quiz={exam._id} />
        });

        return (
            <div>
                <ExamDetail bookName={this.props.bookName} exam={exam} />
                { exam.status === 0 ?
                    <div className="col-md-12" style={preguntasListDiv}>
                        {preguntasItems}
                    </div> : null
                }
            </div>
        );
    }
}

module.exports = MainExamContainer;
