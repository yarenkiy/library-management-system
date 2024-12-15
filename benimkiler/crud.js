// Book array to store book data
let books = [];

// Function to add a new book
function addBook() {
    const isbn = document.getElementById('isbn').value.trim();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const description = document.getElementById('description').value.trim();
    const imageFile = document.getElementById('image').files[0];

    // Basic validation
    if (!isbn || !title || !author) {
        alert('Please fill out ISBN, Title, and Author fields.');
        return;
    }

    const book = {
        id: Date.now(), // Unique ID
        isbn,
        title,
        author,
        description,
        imageUrl: imageFile ? URL.createObjectURL(imageFile) : null
    };

    books.push(book);
    displayBooks();
    clearForm();
}

// Function to display books
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${book.title} (${book.isbn})</strong><br>
            Author: ${book.author}<br>
            Description: ${book.description}<br>
            ${book.imageUrl ? `<img src="${book.imageUrl}" alt="Book Image" style="width:100px;">` : ''}
            <br>
            <button onclick="editBook(${book.id})">Edit</button>
            <button onclick="deleteBook(${book.id})">Delete</button>
            <hr>
        `;
        bookList.appendChild(listItem);
    });
}

// Function to delete a book
function deleteBook(id) {
    alert("Book deleted successfully!");
    // Filter the books to remove the one with the matching ID
    const originalLength = books.length;
    books = books.filter(book => book.id !== id);

    // Check if a book was deleted
    // if (books.length < originalLength) {
    //     alert("Book deleted successfully!");
    //   } else {
    //      alert("No book found with the provided ID.");
    //   }

    // Optionally, refresh the display
    // displayBooks(books);
}

// Function to edit a book
function editBook(event) {
    event.preventDefault();

    var isbn = document.getElementById("book-isbn").value;
    var title = document.getElementById("book-title").value;
    var author = document.getElementById("book-author").value;
    var description = document.getElementById("book-description").value;
    var image = document.getElementById("book-image").files[0];

    if (!isbn) {
        console.error("Error: ISBN is required to update the book.");
        alert("Please provide the ISBN of the book you want to update.");
        return;


    }

    alert("Book updated!");
}

// Function to clear the form
function clearForm() {
    document.getElementById('isbn').value = '';
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('description').value = '';
    document.getElementById('image').value = '';
}
