const express = require('express');
const router = express.Router();
const {
    createBook,
    getBooks,
    getBookById,
    getBookByTitle,
    updateBook,
    deleteBook

} = require('../controllers/book.controller');

// Define routes for book operations
router.post('/',createBook); // Create a new book
router.get('/',getBooks); // Get all books
router.get('/:id',getBookById); // Get a book by ID
router.get('/title/:title', getBookByTitle); // Get a book by title
router.put('/:id', updateBook); // Update a book
router.delete('/:id', deleteBook); // Delete a book

module.exports = router;