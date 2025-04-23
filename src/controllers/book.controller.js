const Book = require('../models/book.model'); // Importing the Book model

const createBook = async(req,res)=>{
    try{
        const existingBook = await Book.findOne({ title: req.body.title }); // Checking if a book with the same title already exists
        if(existingBook){
            return res.status(409).json({
                success: false,
                error: 'Book already added' // Sending a message if the book is already present
            });
        }
        const book = new Book(req.body); // Creating a new Book instance with request body
        await book.save(); // Saving the book to the database
        res.status(201).json({
            success: true,
            data: book // Sending the created book in the response
        });
    }catch(err){
        res.status(400).json({
            success: false,
            error: err.message // Sending the error message in case of failure
        });
    }
}

const getBooks = async(req,res)=>{
    try {
        const books = await Book.find(); // Fetching all books from the database
        res.status(200).json({
            success: true,
            count: books.length, // Sending the count of books
            data: books // Sending the list of books
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message // Sending the error message in case of failure
        });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id); // Fetching a book by its ID
        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found' // Sending a message if the book is not found
            });
        }
        res.status(200).json({
            success: true,
            data: book // Sending the book if found
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message // Sending the error message in case of failure
        });
    }
};

const getBookByTitle = async (req, res) => {
    try {
        const title = req.params.title; // Extracting the title from the request parameters
        const book = await Book.findOne({ title: title }); // Fetching a book by its title
        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found' // Sending a message if the book is not found
            });
        }
        res.status(200).json({
            success: true,
            data: book // Sending the book if found
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message // Sending the error message in case of failure
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { 
            new: true,
            runValidators: true // Updating the book with new data and running validators
        });
        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found' // Sending a message if the book is not found
            });
        }
        res.status(200).json({
            success: true,
            data: book // Sending the updated book
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message // Sending the error message in case of failure
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id); // Deleting a book by its ID
        if (!book) {
            return res.status(404).json({
                success: false,
                error: 'Book not found' // Sending a message if the book is not found
            });
        }
        res.status(200).json({
            success: true,
            data: {} // Sending an empty object to indicate successful deletion
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message // Sending the error message in case of failure
        });
    }
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
    getBookByTitle
};