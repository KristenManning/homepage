console.log("hello!")
// Global Vars
    var stickArr = [];
    var count = 0;
    var notes = $("#display");
    // Binding Create Button
    $("#create").on("click", function(){
      // Append to the Sticky Note Display
      $("#display").append("<li id = 'sticky'>"+
          "<textarea class = 'noteTitle' placeholder='Title' maxlength='10'>"+
          "</textarea><textarea class = 'noteContent' placeholder='Content'></textarea>"+
          "<a href='javascript:void(0)' class = '' id = 'closebtn' onclick= 'close()' >&times;</a>"+
          "</li>");
    });
    // Binding Save Button
    $("#save").on("click", function(event){
      localStorage.clear();
      stickArr = []
      // Preventing Double Clicking
      event.preventDefault();
      // Searching through each sticky note and grabbing data
      notes.find("li").each(function (i, e) {
        var title = $(e).find("textarea.noteTitle");
        var content = $(e).find("textarea.noteContent");
          stickArr.push({Index: i, Title: title.val(), Content: content.val()});
        });
        // Saving the Data
      var jsonStr= JSON.stringify(stickArr);
      localStorage.setItem("notes", jsonStr);

    });
    // Binding Delete Button
    $(document).on("click", "#closebtn", function(){
      $(this).closest("#sticky").remove();
        return false;
      });
    // Part of Load Function
    function add(title, content){
      // Add notes
      notes.append("<li id = 'sticky'>"+
        "<textarea class = 'noteTitle' placeholder='Title' maxlength='10'>"+
        "</textarea><textarea class = 'noteContent' placeholder='Content'></textarea>"+
        "<a href='javascript:void(0)' class = '' id = 'closebtn' onclick= 'close()' >&times;</a>"+
        "</li>");
      // Parse through saved data
      var newNote = notes.find("li:last");
      if(title){
        newNote.find("textarea.noteTitle").val(title);
      }
  if(content){
    newNote.find("textarea.noteContent").val(content);
  }

}
// Load Old Sticky Notes Function
    function load (){
      // Get data from local Storage
      var stored= localStorage.getItem("notes");
      // Store the data into a an Array
        if (stored){
          var stickArr = JSON.parse(stored);
          count = stickArr.length
          var i;
          for (i=0; i < count; i ++){
            var stored= stickArr[i];
            add(stored.Title, stored.Content);
          }
        }
    }
// Calling Load Function
    load();