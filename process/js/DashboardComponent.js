var $ = jQuery = require('jquery');
var React = require('React');
var HeaderComponent = require('./HeaderComponent');
var LeftSidebarComponent = require('./LeftSidebarComponent');
var QuizSelectorComponent = require('./QuizSelectorComponent');
var NewQuizModal = require('./NewQuizModal');
var MainQuizContainer = require('./MainQuizContainer');

class DashboardComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {quizes: [], selectedQuiz: null, booksAndSections: [], selectedBook: null};
    }

    componentDidMount() {
        $.ajax({
          type: 'GET',
          url: "http://localhost:8000/quiz",
          headers: {
              "Authorization":`Bearer ${localStorage.mexEngToken}`,
          },
          success: function(data) {
              this.setState({quizes: data.quizes, selectedQuiz: data.quizes[0], booksAndSections: data.sectionAndBooks});
          }.bind(this),
          complete: function() {

          }.bind(this),
          error: function(jqXHR, textStatus, errorThrown) {
          }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div id="wrapper">
                    <LeftSidebarComponent />
                    <QuizSelectorComponent quizes={this.state.quizes} onQuizSelect={selectedQuiz =>  this.setState({ selectedQuiz }) } />
                    <div className="quiz-container">
                        <div className="quiz-subcontainer">
                            <MainQuizContainer quiz={this.state.selectedQuiz} />
                        </div>
                    </div>
                </div>
                <NewQuizModal booksAndSections={this.state.booksAndSections} />
            </div>
        );
    }
}

module.exports = DashboardComponent;
