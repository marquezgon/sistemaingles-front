var React = require('React');
var Select2 = require('react-select2-wrapper');

var ModalLabelTextfield = require('./ModalLabelTextfield');

class NewQuizModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {currentSections: []};
    }

    onChange(index) {
        if(index > -1) {
            const currentSections = this.props.booksAndSections[index].sections.map((item) => {
                return {text: item.name, id: item._id};
            });

            this.setState({currentSections: currentSections});
        }
    }

    render() {
        if(!this.props.booksAndSections) {
            return <div>Loading...</div>
        }

        const books = this.props.booksAndSections.map((item, index) => {
            return {text: item.book.name, id: index};
        });

        return (
            <div id="newQuizModal" className="modal fade" role="dialog">
              <div className="modal-dialog new-quiz-modal-dialog">

                <div className="modal-content new-quiz-modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center custom-modal-header">CREAR QUIZ</h1>
                            <div className="col-md-12 new-quiz-main-div">
                                <ModalLabelTextfield label="Título" maxLength="25" placeholder="Título (máx. 25)" />
                                <ModalLabelTextfield label="Descripción" maxLength="40" placeholder="Descripción (máx. 40)" />
                                <div className="col-md-12">
                                    <div className="col-md-4">
                                        <h4 className="text-right">Libro</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <Select2 onChange={event => { this.onChange(event.target.selectedIndex) }} className="select2-quiz" data={books}
                                          options={
                                            {
                                              placeholder: 'Selecciona un libro',
                                            }
                                          }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="col-md-4">
                                        <h4 className="text-right">Lección</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <Select2 multiple className="select2-quiz" data={this.state.currentSections}
                                          options={
                                            {
                                              placeholder: 'Selecciona una o más lecciónes',
                                            }
                                          }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                  </div>
                </div>

              </div>
            </div>
        );
    }
}

module.exports = NewQuizModal;
