module.exports = {
bitterTmpl: [
'<article>',
    '<h2 class= "user"> <%=user%> </h2>',
    "<h3 class = 'date' > <%= date %></h3>",
    "<div class = 'post-container'>",
        '<p class = "post-message" > <%= postMessage %> </p>',
    "</div>",
    "<div class = 'button-container'>",
    '<button type="button" class = "delete-button" name="deleteButton">Delete</button>',
    '<button type="button" class = "edit-button" name="editButton">Edit</button>',
    "</div>",
'</article>',
].join(""),

addMessage: [
  '<div class = "add-message-container">',
  '<form class = "">',
  '<input class = "user-input" type="text" placeholder="Enter Username" value="">',
  '<input class = "date-input" type="text" placeholder="Enter Date" value="">',
  '<input class = "post-input" type="text" placeholder="Enter Post" value="">',
  '<button class = "submit-post-button" value ="Submit">Submit</button>',
  '</form>',
  '</div>'
].join(""),

editMessage: [
  '<div class = "edit-message-container">',
  '<form class = "">',
  '<input class = "user-edit" type="text" placeholder="Enter Username" value="">',
  '<input class = "date-edit" type="text" placeholder="Enter Date" value="">',
  '<input class = "post-edit" type="text" placeholder="Enter Post" value="">',
  '<button class = "submit-edit-button" value ="Submit">Submit</button>',
  '</form>',
  '</div>'
].join("")
};
