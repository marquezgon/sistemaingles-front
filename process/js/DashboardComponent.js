var $ = jQuery = require('jquery');
var React = require('React');
var QuizSelectorComponent = require('./QuizSelectorComponent');
var NewQuizModal = require('./NewQuizModal');
var TakeQuizModal = require('./TakeQuizModal');
var UpdateProfileModal = require('./UpdateProfileModal');
var MainQuizContainer = require('./MainQuizContainer');

var ajaxHelper = require('./helpers/ajax');
var helpers = require('./helpers/helpers');

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {quizes: [], selectedQuiz: null, booksAndSections: [], selectedBook: null, bookName: '', sectionNames: '', studentInfo: null, showProfileModal: false};
        this.updateQuizList = this.updateQuizList.bind(this);
        this.deleteQuiz = this.deleteQuiz.bind(this);
        this.updateQuizSolved = this.updateQuizSolved.bind(this);
        this.updateStudentInfo = this.updateStudentInfo.bind(this);
    }

    componentDidMount() {
        ajaxHelper.fetchQuizes(this);
        ajaxHelper.fetchStudentInfo(this);
    }

    updateQuizSolved(selectedQuiz) {
        this.setState({selectedQuiz, quizes: this.state.quizes.map((quiz) => {
            if(quiz._id == selectedQuiz._id) {
                quiz = selectedQuiz;
            }
            return quiz;
        })});
    }

    updateStudentInfo(studentInfo) {
        this.setState({studentInfo});
    }

    updateQuizList(quiz) {
        var quizes = this.state.quizes;
        quizes.unshift(quiz);
        this.setState({quizes: quizes, selectedQuiz: quizes[0]});
    }

    deleteQuiz(selectedQuiz) {
        ajaxHelper.deleteQuiz(this, selectedQuiz);
    }

    onQuizSelect(selectedQuiz) {
        const bookSectionNames = helpers.getBookSectionsName(this.state.booksAndSections, selectedQuiz);
        this.setState({ selectedQuiz, bookName: bookSectionNames.book, sectionNames: bookSectionNames.sections });
    }

    render() {
        return (
            <div>
                <QuizSelectorComponent quizes={this.state.quizes} onQuizSelect={selectedQuiz => this.onQuizSelect(selectedQuiz) } onQuizDelete={this.deleteQuiz} />
                <div className="quiz-container">
                    <div className="quiz-subcontainer">
                        <MainQuizContainer quiz={this.state.selectedQuiz} bookName={this.state.bookName} sectionNames={this.state.sectionNames} />
                    </div>
                </div>
                <NewQuizModal updateQuizList={this.updateQuizList} booksAndSections={this.state.booksAndSections} />
                <TakeQuizModal sendUpdatedSolvedQuiz={this.updateQuizSolved} quiz={this.state.selectedQuiz} />

                <UpdateProfileModal updateStudentInfo={this.updateStudentInfo} studentInfo={this.state.studentInfo} />
            </div>
        );
    }
}

module.exports = DashboardComponent;
