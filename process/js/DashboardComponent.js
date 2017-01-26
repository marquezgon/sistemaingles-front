var $ = jQuery = require('jquery');
var React = require('React');
var HeaderComponent = require('./HeaderComponent');
var LeftSidebarComponent = require('./LeftSidebarComponent');
var QuizSelectorComponent = require('./QuizSelectorComponent');
var NewQuizModal = require('./NewQuizModal');
var MainQuizContainer = require('./MainQuizContainer');

var ajaxHelper = require('./helpers/ajax');
var helpers = require('./helpers/helpers');

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {quizes: [], selectedQuiz: null, booksAndSections: [], selectedBook: null, bookName: '', sectionNames: ''};
        this.updateQuizList = this.updateQuizList.bind(this);
        this.deleteQuiz = this.deleteQuiz.bind(this);
    }

    componentDidMount() {
        ajaxHelper.fetchQuizes(this);
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
                <HeaderComponent />
                <div id="wrapper">
                    <LeftSidebarComponent />
                    <QuizSelectorComponent quizes={this.state.quizes} onQuizSelect={selectedQuiz => this.onQuizSelect(selectedQuiz) } onQuizDelete={this.deleteQuiz} />
                    <div className="quiz-container">
                        <div className="quiz-subcontainer">
                            <MainQuizContainer quiz={this.state.selectedQuiz} bookName={this.state.bookName} sectionNames={this.state.sectionNames} />
                        </div>
                    </div>
                </div>
                <NewQuizModal updateQuizList={this.updateQuizList} booksAndSections={this.state.booksAndSections} />
            </div>
        );
    }
}

module.exports = DashboardComponent;
