var React = require('react');

class QuizCreated extends React.Component {
    render() {
        const quizDiv = {
            fontSize: '300px',
            paddingTop:'70px'
        }

        const h1Style = {
            marginTop: '-35px'
        }

        return (
            <div className="col-md-12 text-center" style={quizDiv}>
                <i className="glyphicon glyphicon-ok-circle"></i>
                <h1 style={h1Style} className="custom-modal-header">{this.props.text}</h1>
            </div>
        )
    }
}

module.exports = QuizCreated;
