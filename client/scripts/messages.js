var Messages = {
    // event listener on submit button 
    // prepend username + message to the top of the #chats
    
    addMessage: function(data) {
        let userName = App.username;
        let myTweet = $('#message').val();
        let newTweet = $("<div class='chat'><div class='username'><h3>" + userName + "</h3></div><div class='text'><h5> " + myTweet + "</h5></div></div>")
        let lobby = $("#rooms select").val();
        let message = {username: userName, text: myTweet, roomname: lobby};

        Parse.create(message);
        $('#chats').prepend(newTweet);
      },
    

};