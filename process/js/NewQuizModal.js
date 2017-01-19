var React = require('React');

const MAX_TITLE_CHARS = 25;
const MAX_DESCRIPTION_CHARS = 40;

class NewQuizModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {titleChars: 25, titleText: '', descChars: 40, descText: ''};
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(refName, event) {
        if(refName === "title") {
            var charsRemaining = this.state.titleChars;
            charsRemaining = MAX_TITLE_CHARS - this.refs.titleInput.value.length
            this.setState({titleChars: charsRemaining, titleText: this.refs.titleInput.value});
        } else if(refName === "description") {
            var charsRemaining = this.state.descChars;
            charsRemaining = MAX_DESCRIPTION_CHARS - this.refs.descInput.value.length
            this.setState({descChars: charsRemaining, descText: this.refs.descInput.value});
        }
    }

    render() {
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
                                <div className="col-md-12">
                                    <div className="col-md-4">
                                        <h4 className="text-right">Título</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <input maxLength="25" ref="titleInput" onChange={this.handleUserInput.bind(this, "title")} value={this.state.titleText} className="new-quiz-input" type="text" placeholder="Título (máx. 25)" />
                                    </div>
                                    <div className="col-md-2">
                                        <h5>{`${this.state.titleChars} rest.`}</h5>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="col-md-4">
                                        <h4 className="text-right">Descripción</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <input maxLength="40" ref="descInput" onChange={this.handleUserInput.bind(this, "description")} value={this.state.descText} className="new-quiz-input" type="text" placeholder="Descripción (máx. 40)" />
                                    </div>
                                    <div className="col-md-2">
                                        <h5>{`${this.state.descChars} rest.`}</h5>
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
