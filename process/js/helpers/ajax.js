var $ = jQuery = require('jquery');

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
  fetchQuizes(component) {
      $.ajax({
        type: 'GET',
        url: "http://localhost:8000/quiz",
        headers: {
            "Authorization":`Bearer ${localStorage.mexEngToken}`,
        },
        success: function(data) {
            component.setState({quizes: data.quizes, selectedQuiz: data.quizes[0], booksAndSections: data.sectionAndBooks});
        }.bind(component),
        complete: function() {

        }.bind(component),
        error: function(jqXHR, textStatus, errorThrown) {
        }.bind(component)
      });
  }
}
