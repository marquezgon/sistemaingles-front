var $ = jQuery = require('jquery');
var React = require('React');
var Select2 = require('react-select2-wrapper');

var ModalLabelTextfield = require('./ModalLabelTextfield');
var BookDropdown = require('./BookDropdown');
var LessonDropdown = require('./LessonDropdown');
var QuestionsDropdown = require('./QuestionsDropdown');
var QuizCreated = require('./QuizCreated');
var LoadingSpinnerComponent = require('./LoadingSpinnerComponent');

var ajaxHelper = require('./helpers/ajax');

class NewQuizModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {currentSections: [], index: null, isCreatingQuiz: false, isCreated: false};
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(index) {
        if(index > -1) {
            const currentSections = this.props.booksAndSections[index].sections.map((item) => {
                return {text: item.name, id: item._id};
            });

            this.setState({currentSections: currentSections, index: index});
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        try {

            this.setState({isCreatingQuiz: true})

            const bookId = this.props.booksAndSections[this.state.index].book.id;
            const formData = $('#newQuizForm').serialize()+'&book='+bookId;

            ajaxHelper.createQuiz(this, formData);

        }
        catch (e) {
            throw e;
        }
    }

    render() {
        const marginRight = {
            marginRight: '18px'
        }

        return (
            <div id="newQuizModal" className="modal fade" role="dialog">
              <div className="modal-dialog new-quiz-modal-dialog">
                <div className="modal-content new-quiz-modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  {
                      this.state.isCreated ?
                      <QuizCreated /> :
                      <form id="newQuizForm" onSubmit={this.handleSubmit}>
                          <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center custom-modal-header">CREAR QUIZ</h1>
                                    <div className="col-md-12 new-quiz-main-div">
                                        <ModalLabelTextfield name="title" label="Título" maxLength="25" placeholder="Título (máx. 25)" />
                                        <ModalLabelTextfield name="description" label="Descripción" maxLength="40" placeholder="Descripción (máx. 40)" />
                                        <BookDropdown changeSelectOption={this.onChange} booksAndSections={this.props.booksAndSections} />
                                        <LessonDropdown quizCreating={this.state.isCreatingQuiz} currentSections={this.state.currentSections} />
                                        <QuestionsDropdown />
                                    </div>
                                </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="col-md-8 col-md-offset-4 new-quiz-main-div text-center">
                                          {this.state.isCreatingQuiz ?
                                              <LoadingSpinnerComponent type="quizModal" /> :
                                              <div>
                                                  <button type="submit" style={marginRight} className="btn btn-success">&nbsp;&nbsp;&nbsp;CREAR&nbsp;&nbsp;&nbsp;</button>
                                                  <button type="button" data-dismiss="modal" className="btn btn-default text-left">CANCELAR</button>
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

module.exports = NewQuizModal;
