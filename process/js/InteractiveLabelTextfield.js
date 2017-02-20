var React = require('react');

var LoadingSpinnerComponent = require('./LoadingSpinnerComponent');

class InteractiveLabelTextfield extends React.Component {
    constructor(props) {
        super(props)

        const text = this.props.text ? this.props.text : '';
        this.state = {text};
        console.log(this.props.text);
    }

    render() {

        const marginBottom = {
            marginBottom: '10px'
        }

        return (
            <div className={this.props.colType}>
                <div className="col-md-4">
                    <h4 className="text-right">{this.props.label}</h4>
                </div>
                <div className="col-md-8">
                    <input id={this.props.id} name={this.props.name} onChange={event => this.setState({text: event.target.value})} value={this.state.text} className="new-quiz-input" type={this.props.type} placeholder={this.props.placeholder} />
                </div>
            </div>
        )
    }
}

module.exports = InteractiveLabelTextfield;
