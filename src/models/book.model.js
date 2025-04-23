// Import the mongoose library to interact with the MongoDB database
const mongoose = require('mongoose');

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
  
  title: { type: String, required: true }, // The title of the book (required)
  author: { type: String, required: true },   // The author of the book (required)
  price: { type: Number, required: true }   // The price of the book (required)

});

// Create and export the Book model based on the defined schema
module.exports = mongoose.model('Book', bookSchema);
