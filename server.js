const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// In-memory array acting as our "database"
let books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 2, title: "1984", author: "George Orwell" }
];

// 1. GET /books - Retrieve all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

// 2. GET /books/:id - Retrieve a single book by ID
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
});

// 3. POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and Author are required" });
    }

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// 4. PUT /books/:id - Update an existing book by ID
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author } = req.body;

    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    // Update fields if provided, otherwise keep existing values
    books[bookIndex] = {
        id: bookId,
        title: title || books[bookIndex].title,
        author: author || books[bookIndex].author
    };

    res.status(200).json(books[bookIndex]);
});

// 5. DELETE /books/:id - Remove a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    // Remove the book from the array
    books.splice(bookIndex, 1);
    res.status(200).json({ message: "Book deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
