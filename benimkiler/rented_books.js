const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        rentedBy: "20comp1017",
        imageUrl: "TheGreatGatsby.jpg"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        rentedBy: "20comp1034",
        imageUrl: "mockinbird.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        rentedBy: "ozgur",
        imageUrl: "1984.jpg"
    }
];

// Display all books
function displayBooks(bookArray) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear the list

    bookArray.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        bookItem.innerHTML = `
            <div class="book-image">
                <img src="${book.imageUrl}" alt="Book Image">
            </div>
            <div class="book-details">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
            </div>
            <div class="rented-by">Rented by ${book.rentedBy}</div>
        `;

        bookList.appendChild(bookItem);
    });
}

// Search functionality
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.rentedBy.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

// Initialize book list on page load
document.addEventListener('DOMContentLoaded', () => displayBooks(books));
