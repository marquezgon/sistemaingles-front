var $ = jQuery = require('jquery');
var React = require('react');

var LoadingSpinnerComponent = require('./LoadingSpinnerComponent');
var InteractiveLabelTextfield = require('./InteractiveLabelTextfield');
var QuizCreated = require('./QuizCreated');

var ajaxHelper = require('./helpers/ajax');

class UpdateProfileModal extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {error: false, errorMsg : '', isSending: false, isSent: false};

    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({error: false, errorMsg: ''});
        const password = $('input[name="password"]').val();
        const passwordConfirm = $('#confirm_password').val();
        if(password.length > 1 && password.length < 6) {
            this.setState({error: true, errorMsg: 'La contraseña debe tener más de 6 caracteres'});

            return;
        }
        if(password !== passwordConfirm) {
            this.setState({error: true, errorMsg: 'Las contraseñas no coinciden'});
            return;
        }
        this.setState({ isSending: true });
        const profileForm = $('#updateProfileForm').serialize();
        ajaxHelper.updateStudentInfo(this, profileForm);
    }

    clearPasswordFields() {
        this.setState({error: false, errorMsg: ''});
        $('#updateProfileModal').modal('hide');
    }

    render() {

        if(!this.props.studentInfo) {
            return null;
        }

        const marginRight = {
            marginRight: '18px'
        }

        return (
            <div id="updateProfileModal" className="modal fade" role="dialog">
                <div className="modal-dialog new-quiz-modal-dialog">
                    <div className="modal-content new-quiz-modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={() => this.clearPasswordFields()} className="close">&times;</button>
                        </div>
                        {
                            this.state.isSent ?
                            <QuizCreated text="¡Perfil Actualizado!" /> :
                            <form id="updateProfileForm" onSubmit={this.handleSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1 className="text-center custom-modal-header">Perfil</h1>
                                            <div className="col-md-12 new-quiz-main-div">
                                                <InteractiveLabelTextfield colType="col-md-12" name="name" label="Nombre" placeholder="Ingresa tu nombre" text={this.props.studentInfo.name} type="text" />
                                                <InteractiveLabelTextfield colType="col-md-12" name="lastname" label="Apellidos" placeholder="Ingresa tus apellidos" text={this.props.studentInfo.lastname} type="text" />
                                                <InteractiveLabelTextfield colType="col-md-12" name="password" label="Contraseña" placeholder="Ingresa una nueva contraseña" type="password" />
                                                <InteractiveLabelTextfield colType="col-md-12" id="confirm_password" label="Confirma Contraseña" placeholder="Vuelve a ingresar tu contraseña" type="password" />
                                                {/* <InteractiveLabelTextfield colType="col-md-12" name="title" disabled="true" label="Nombre de Usuario" placeholder="Nombre de Usuario" /> */}
                                            </div>
                                            {
                                                this.state.error ?
                                                <div className="col-md-12 new-quiz-main-div">
                                                    <h4 className="text-danger text-center">{this.state.errorMsg}</h4>
                                                </div> :
                                                null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="col-md-8 col-md-offset-4 new-quiz-main-div text-right">
                                                {this.state.isSending ?
                                                    <LoadingSpinnerComponent type="quizModal" additionalClasses="pull-right"/> :
                                                    <div>
                                                        <button type="submit" style={marginRight} className="btn btn-success">&nbsp;GUARDAR&nbsp;</button>
                                                        <button type="button" onClick={() => this.clearPasswordFields()} className="btn btn-default text-left">CANCELAR</button>
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

module.exports = UpdateProfileModal;
