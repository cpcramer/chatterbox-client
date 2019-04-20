var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    let userName = App.username;
    let myTweet = $('#message').val();
    let newTweet = $("<div class='chat'><div class='username'><h3>" + userName + "</h3></div><div class='text'><h5> " + myTweet + "</h5></div></div>")
    // {class: 'chat'}
    Messages.addMessage();
    // $('#chats').prepend(newTweet);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};