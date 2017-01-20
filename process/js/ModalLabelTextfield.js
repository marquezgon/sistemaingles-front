var React = require('React');

class ModalLabelTextfield extends React.Component {
    constructor(props) {
        super(props);

        this.state = {charsRemaining: this.props.maxLength, text: ''};
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(value) {
        const MAX_LENGTH = this.props.maxLength;
        const charsRemaining = MAX_LENGTH - value.length
        this.setState({charsRemaining, text: value});
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <h4 className="text-right">{this.props.label}</h4>
                </div>
                <div className="col-md-6">
                    <input maxLength={this.props.maxLength} onChange={ event => this.handleUserInput(event.target.value)} value={this.state.text} className="new-quiz-input" type="text" placeholder={this.props.placeholder} />
                </div>
                <div className="col-md-2">
                    <h5 className="text-left">{`${this.state.charsRemaining} rest.`}</h5>
                </div>
            </div>
        );
    }
}

module.exports = ModalLabelTextfield;
