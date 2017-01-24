var React = require('React');
var Select2 = require('react-select2-wrapper');

class QuestionsDropdown extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const marginTop = {
            marginTop: '5px'
        }

        return (
            <div className="col-md-12" style={marginTop}>
                <div className="col-md-4">
                    <h4 className="text-right">Preguntas</h4>
                </div>
                <div className="col-md-6">
                    <Select2 name="questions" className="select2-quiz" data={[5,10,15,20,25,30]}
                      options={
                        {
                          placeholder: 'Número de preguntas',
                        }
                      }
                    />
                </div>
            </div>
        );
    }
}

module.exports = QuestionsDropdown;
