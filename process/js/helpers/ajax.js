var $ = jQuery = require('jquery');

var helpers = require('./helpers');

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

function process(Data) {
  const source = context.createBufferSource();
  context.decodeAudioData(Data, (buffer) => {
      source.buffer = buffer;
      source.connect(context.destination);
      source.start(context.currentTime);
  });
}

module.exports = {
  deleteQuiz(component, selectedQuiz) {
      $.ajax({
        type: 'DELETE',
        url: `http://localhost:8000/quiz/${selectedQuiz._id}`,
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        success: function(data) {
            component.setState({quizes: component.state.quizes.filter((quiz) => quiz !== selectedQuiz )})
        }.bind(component),
        complete: function() {

        }.bind(component),
        error: function(jqXHR, textStatus, errorThrown) {
        }.bind(component)
      });
  },
  sendSolvedQuiz(component, quizId, quizForm) {
      $.ajax({
        type: 'POST',
        url: `http://localhost:8000/quiz/solved/${quizId}`,
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        data: quizForm,
        success: function(data) {
            component.setState({isSent: true});
            setTimeout(() => {
                $('#takeQuizModal').modal('hide');
                component.setState({isSent: false});
            }, 1250);
        }.bind(component),
        complete: function() {
            component.setState({isSendingQuiz: false})
        }.bind(component),
        error: function(jqXHR, textStatus, errorThrown) {
        }.bind(component)
      });
  },
  fetchQuizes(component) {
      $.ajax({
        type: 'GET',
        url: "http://localhost:8000/quiz",
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        success: function(data) {
            const bookSectionNames = helpers.getBookSectionsName(data.sectionAndBooks, data.quizes[0])
            component.setState({quizes: data.quizes, selectedQuiz: data.quizes[0], booksAndSections: data.sectionAndBooks, bookName: bookSectionNames.book, sectionNames: bookSectionNames.sections});
        }.bind(component),
        complete: function() {

        }.bind(component),
        error: function(jqXHR, textStatus, errorThrown) {
        }.bind(component)
      });
  },
  createQuiz(component, formData) {
      $.ajax({
          type: 'POST',
          url: "http://localhost:8000/quiz",
          data: formData,
          headers: {
              "Authorization":`Bearer ${localStorage.mexEngToken}`,
          },
          success: function(quiz) {
              component.props.updateQuizList(quiz);
              component.setState({isCreated: true});
              setTimeout(() => {
                  $('#newQuizModal').modal('hide');
                  component.setState({isCreated: false});
              }, 1250);
          }.bind(component),
          complete: function() {
              component.setState({isCreatingQuiz: false})
          }.bind(component),
          error: function(jqXHR, textStatus, errorThrown) {
          //   if(jqXHR.responseJSON.message) {
          //     this.setState({errMsg: jqXHR.responseJSON.message});
          //   }
          }.bind(this)
      });
  },
  textToSpeech(text) {
      const request = new XMLHttpRequest();
      request.open('POST', 'http://localhost:8000/polly/create', true);
      request.responseType = 'arraybuffer';

      request.onload = function onLoad() {
          const Data = request.response;
          process(Data);
      };

      request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      request.send(JSON.stringify({text: text}));
  }
}
