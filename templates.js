module.exports = {
bitterTmpl: [
'<article>',
    '<h2 class= "user"></h2>',
    "<h3 class = 'date' ></h2>",
    "<div class = 'post-container'>",
        '<p class = "post-message" ></h2>',
    "</div>",
    "div class = 'button-container'>",
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
].join("")
};
