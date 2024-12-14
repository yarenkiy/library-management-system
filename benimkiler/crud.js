// Placeholder data for books
const books = [
    { id: 1, title: "Book A", author: "Author A", status: "Available" },
    { id: 2, title: "Book B", author: "Author B", status: "Rented" },
];

// Function to display books in the table
function displayBooks() {
    const tableBody = document.querySelector("#book-table tbody");
    tableBody.innerHTML = ""; // Clear the table first

    books.forEach((book) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Add Book Functionality
function addBook() {
    const newBook = {
        id: books.length + 1,
        title: prompt("Enter book title:"),
        author: prompt("Enter book author:"),
        status: "Available",
    };

    if (newBook.title && newBook.author) {
        books.push(newBook);
        alert("Book added successfully!");
        displayBooks();
    } else {
        alert("Book title and author are required.");
    }
}

// Update Book Functionality
function updateBook() {
    const bookId = parseInt(prompt("Enter the Book ID to update:"));
    const book = books.find((b) => b.id === bookId);

    if (book) {
        book.title = prompt("Enter new title:", book.title);
        book.author = prompt("Enter new author:", book.author);
        alert("Book updated successfully!");
        displayBooks();
    } else {
        alert("Book not found.");
    }
}

// Delete Book Functionality
function deleteBook() {
    const bookId = parseInt(prompt("Enter the Book ID to delete:"));
    const bookIndex = books.findIndex((b) => b.id === bookId);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        alert("Book deleted successfully!");
        displayBooks();
    } else {
        alert("Book not found.");
    }
}

// Display Rented Books
function displayRentedBooks() {
    const rentedBooks = books.filter((book) => book.status === "Rented");

    if (rentedBooks.length > 0) {
        alert(
            "Rented Books:\n" +
            rentedBooks.map((b) => `${b.title} by ${b.author}`).join("\n")
        );
    } else {
        alert("No books are currently rented.");
    }
}

// Initialize the table on page load
document.addEventListener("DOMContentLoaded", displayBooks);
