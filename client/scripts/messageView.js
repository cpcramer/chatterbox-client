var MessageView = {

  render: _.template(

      `
      <div class="chat">
        <div class="username"> 
          <h3> 
            <%- username %> 
          </h3> 
        </div>
        <div class="text">
          <h5>
            <%- text %>
          </h5>
        </div>
      </div>
      `  
    )
  //render({Hello: 'blahblah'});
};

