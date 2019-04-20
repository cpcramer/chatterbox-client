var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {

    this.renderMessage(data);
  },

  renderMessage: function(data) {
    let i;
    let html = '';
    let tweets = data.results;
    // console.log(tweets);
    
    for (i = 0; i < tweets.length; i++) {
      if (tweets[i].text !== undefined && tweets[i].text !== '' && tweets[i].username !== undefined) {
      var newName = tweets[i].username.replace(/%20/g, ' ');

      html += MessageView.renderMessage({username: newName, text: tweets[i].text, roomname: tweets[i].roomname});
      }
    }
    $('#chats').append(html);
  }

};