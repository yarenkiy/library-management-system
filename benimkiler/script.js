function addBook(event) {
    event.preventDefault();
    var isbn = document.getElementById("book-isbn").value;
    var title = document.getElementById("book-title").value;
    var author = document.getElementById("book-author").value;
    var description = document.getElementById("book-description").value;
    var image = document.getElementById("book-image").files[0];
  
    
    console.log("Book added:");
    console.log("ISBN: "+isbn);
    console.log("Title: " + title);
    console.log("Author: " + author);
    console.log("Description: " + description);
    console.log("Image: " + image.name);
  
  
    document.getElementById("book-isbn").value = "";
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-description").value = "";
    document.getElementById("book-image").value = "";
  }
  
