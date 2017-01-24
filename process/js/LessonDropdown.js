var React = require('React');
var Select2 = require('react-select2-wrapper');

class LessonDropdown extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.quizCreating) {
            return false;
        }

        return true;
    }

    render() {
        if(!this.props.currentSections) {
            return <div>Loading...</div>
        }

        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <h4 className="text-right">Lección</h4>
                </div>
                <div className="col-md-6">
                    <Select2 name="section" onOpen={this.selectOpen} multiple className="select2-quiz" data={this.props.currentSections}
                      options={
                        {
                          placeholder: 'Selecciona una o más lecciónes',
                        }
                      }
                    />
                </div>
            </div>
        );
    }
}

module.exports = LessonDropdown;
