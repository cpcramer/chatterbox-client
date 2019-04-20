var MessagesView = {

  $chats: $('#chats'),

  initialize: function(data) {
    this.render(data);
  },

  render: function(data) {
    let i;
    let html = '';
    let tweets = data.results;
    console.log(tweets);
    
    for (i = 0; i < tweets.length; i++) {
      if (tweets[i].text !== undefined && tweets[i].text !== '' && tweets[i].username !== undefined) {
      html += MessageView.render({username: tweets[i].username, text: tweets[i].text});
      }
    }
    $('#chats').append(html);
  }

};