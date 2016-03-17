module.exports = {
bitterTmpl: [
    '<h4 class= "user">   <%=user%> | </h2>',
    "<h4 class = 'date' > <%= date %></h3>",
    "<div class = 'post-container'>",
        '<p class = "post-message" > <%= postMessage %> </p>',
    "</div>",
    "<div class = 'button-container'>",
    '<button type="button" class = "delete-button btn btn-default" name="deleteButton">Delete</button>',
    '<button type="button" class = "edit-button btn btn-default" name="editButton">Edit</button>',
    "</div>",
].join(""),

addMessage: [
  '<h1> Bitter </h1>',
  '<form class = "">',
  '<input class = "user-input form-control" type="text" placeholder="Enter Username" value="">',
  '<input class = "date-input form-control" type="text" placeholder="Enter Date" value="">',
  '<input class = "post-input form-control" type="text" placeholder="Enter Post" value="">',
  '<button class = "submit-post-button btn btn-default" value ="Submit">Submit</button>',
  '</form>',
].join(""),

editMessage: [
  '<div class = "edit-message-container inactive">',
  '<form class = "">',
  '<input class = "user-edit form-control" type="text" placeholder="" value="<%=user%>">',
  '<input class = "date-edit form-control" type="text" placeholder="Enter Date" value="<%= date %>">',
  '<input class = "post-edit form-control" type="text" placeholder="Enter Post" value="<%= postMessage %>">',
  '<button class = "submit-edit-button btn btn-default" value ="Submit">Submit Edit</button>',
  '</form>',
  '</div>'
].join("")
};
