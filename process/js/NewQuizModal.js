var React = require('React');

class NewQuizModal extends React.Component {
    render() {
        return (
            <div id="newQuizModal" className="modal fade" role="dialog">
              <div className="modal-dialog new-quiz-modal-dialog">

                <div className="modal-content new-quiz-modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Modal Header</h4>
                  </div>
                  <div className="modal-body">
                    <p>Some text in the modal.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>

              </div>
            </div>
        );
    }
}

module.exports = NewQuizModal;
