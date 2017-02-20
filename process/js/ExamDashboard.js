var $ = jQuery = require('jquery');
var React = require('React');
var ExamSelector = require('./ExamSelector');
var TakeExamModal = require('./TakeExamModal');
var MainExamContainer = require('./MainExamContainer');

var ajaxHelper = require('./helpers/ajax');
var helpers = require('./helpers/helpers');

class ExamDashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {exams: [], selectedExam: null, selectedBook: null, bookName: '', sectionNames: ''};
        this.deleteExam = this.deleteExam.bind(this);
        this.updateExamSolved = this.updateExamSolved.bind(this);
    }

    componentDidMount() {
        ajaxHelper.fetchExams(this);
    }

    updateExamSolved(selectedExam) {
        this.setState({selectedExam, quizes: this.state.exams.map((exam) => {
            if(exam._id == selectedExam._id) {
                exam = selectselectedExamedQuiz;
            }
            return exam;
        })});
    }

    deleteExam(selectedExam) {
        ajaxHelper.deleteExam(this, selectedExam);
    }

    onExamSelect(selectedExam) {
        this.setState({ selectedExam });
    }

    render() {
        return (
            <div>
                <ExamSelector exams={this.state.exams} onExamSelect={selectedExam => this.onExamSelect(selectedExam) } onQuizDelete={this.deleteExam} />
                <div className="quiz-container">
                    <div className="quiz-subcontainer">
                        <MainExamContainer exam={this.state.selectedExam} bookName={this.state.bookName} />
                    </div>
                </div>
                <TakeExamModal sendUpdatedSolvedExam={this.updateExamSolved} exam={this.state.selectedExam} />
            </div>
        );
    }
}

module.exports = ExamDashboard;
