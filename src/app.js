// Importing express and creating an instance of the express app
const express = require('express');
const app = express();
// Importing book routes
const bookRoutes = require('./routes/book.Routes');

// Loading environment variables
require('dotenv').config();

// Middleware to parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());

// Root route handler
app.get('/', (req, res) => {
    // Sending a welcome message to the client
    res.json({ message: 'Welcome to the BookStore API' });
});

// Using book routes
app.use('/api/books',bookRoutes);

// Exporting the app for use in other files
module.exports = app;
