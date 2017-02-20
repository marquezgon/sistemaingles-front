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
  sendSolvedQuiz(component, quizId, quizForm, quizFormArray) {
      $.ajax({
        type: 'POST',
        url: `http://localhost:8000/quiz/solved/${quizId}`,
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        data: quizForm,
        success: function(quiz) {
            component.setState({isSent: true});
            setTimeout(() => {
                $('#takeQuizModal').modal('hide');
                component.setState({isSent: false});
                component.props.sendUpdatedSolvedQuiz(quiz);
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
            if(data.quizes.length > 0) {
                const bookSectionNames = helpers.getBookSectionsName(data.sectionAndBooks, data.quizes[0])
                component.setState({quizes: data.quizes, selectedQuiz: data.quizes[0], bookName: bookSectionNames.book, sectionNames: bookSectionNames.sections});
            }
            component.setState({booksAndSections: data.sectionAndBooks});
        }.bind(component),
        complete: function() {

        }.bind(component),
        error: function(jqXHR, textStatus, errorThrown) {
        }.bind(component)
      });
  },
  fetchExams(component) {
      $.ajax({
        type: 'GET',
        url: "http://localhost:8000/exam/student",
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        success: function(exams) {
            component.setState({exams, selectedExam: exams[0]});
        }.bind(component),
        complete: function() {

        }.bind(component),
        error: function(jqXHR, textStatus, errorThrown) {
        }.bind(component)
      });
  },
  fetchStudentInfo(component) {
      $.ajax({
        type: 'GET',
        url: "http://localhost:8000/student",
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        success: function(studentInfo) {
            component.setState({studentInfo});
        }.bind(component),
        complete: function() {

        }.bind(component),
        error: function(jqXHR, textStatus, errorThrown) {
        }.bind(component)
      });
  },
  updateStudentInfo(component, studentForm) {
      $.ajax({
        type: 'PUT',
        url: 'http://localhost:8000/student',
        data: studentForm,
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        success: function(studentInfo) {
            component.setState({isSent: true});
            setTimeout(() => {
                $('#updateProfileModal').modal('hide');
                component.setState({ isSent: false });
                component.props.updateStudentInfo(studentInfo);
            }, 1250);
            //component.setState({studentInfo});
        }.bind(component),
        complete: function() {
            component.setState({isSending: false});
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
          success: function(student) {

          }.bind(component),
          complete: function() {
              component.setState({isSent: false})
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
  },
  markAnswer(status, questionId, quizId, component) {
      $.ajax({
          type: 'PUT',
          url: `http://localhost:8000/quiz/${quizId}/markAnswer/${questionId}`,
          data: JSON.stringify({status}),
          contentType: "application/json;charset=UTF-8",
          dataType: "json",
          headers: {
              "Authorization":`Bearer ${localStorage.mexEngToken}`,
          },
          success: function(data) {
              component.setState({status});
          }.bind(component),
          complete: function() {

          }.bind(component),
          error: function(jqXHR, textStatus, errorThrown) {
          //   if(jqXHR.responseJSON.message) {
          //     this.setState({errMsg: jqXHR.responseJSON.message});
          //   }
          }.bind(this)
      });
  }
}
