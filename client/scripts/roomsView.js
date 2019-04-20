var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(data) {
    RoomsView.render(data);
  },

  render: function(data) {
    let tweets = data.results;
    console.log(tweets);

    var roomNames = [];

    for (var i = 0; i < tweets.length; i++) {
      if (tweets[i].roomname !== undefined && tweets[i].roomname !== '') {
        roomNames.push(tweets[i].roomname);
      }
    }
    var uniqueRooms = [...new Set(roomNames)];
    
    console.log(uniqueRooms);
    for(let i = 0; i < uniqueRooms.length; i++){
      // var kabob = uniqueRooms[i].split(' ').join('');
      var kabob = uniqueRooms[i].replace(/ /g, '-')
      console.log(kabob);
      $('#rooms select').append("<option value=" + kabob + ">" + uniqueRooms[i] + "</option>")
    }
    console.log(roomNames);
  }
};
