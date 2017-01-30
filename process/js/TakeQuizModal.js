var $ = jQuery = require('jquery');
var React = require('React');

var LoadingSpinnerComponent = require('./LoadingSpinnerComponent');
var TakeQuizListItem = require('./TakeQuizListItem');
var QuizCreated = require('./QuizCreated');

var ajaxHelper = require('./helpers/ajax');

class TakeQuizModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {isSendingQuiz: false, isSent: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({isSendingQuiz: true});
        const quizForm = $('#takeQuizForm').serialize();
        ajaxHelper.sendSolvedQuiz(this, this.props.quiz._id, quizForm);
    }

    render() {

        const quiz = this.props.quiz;

        if(!quiz) {
            return null;
        }

        const quizItems = quiz.questions.map((question, index) => {
            return <TakeQuizListItem question={question} key={index} index={index} />
        })

        return (
            <div id="takeQuizModal" className="modal fade" role="dialog">
              <div className="modal-dialog new-quiz-modal-dialog">
                <div className="modal-content new-quiz-modal-content">
                  <div className="modal-header">
                  </div>
                  {
                      this.state.isSent ?
                      <QuizCreated text="¡Quiz Guardado!" /> :
                      <form id="takeQuizForm" onSubmit={this.handleSubmit}>
                          <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center custom-modal-header">{quiz.title}</h1>
                                    <div className="col-md-12 new-quiz-main-div">
                                        {quizItems}
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="col-md-8 col-md-offset-4 new-quiz-main-div text-right">
                                          {this.state.isSendingQuiz ?
                                              <LoadingSpinnerComponent type="quizModal" additionalClasses="pull-right"/> :
                                              <div>
                                                  <button type="submit" className="btn btn-success">&nbsp;&nbsp;&nbsp;TERMINAR&nbsp;&nbsp;&nbsp;</button>
                                              </div>
                                          }
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </form>
                  }
                </div>
              </div>
            </div>
        );
    }
}

module.exports = TakeQuizModal;
