const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load .env using correct __dirname resolution
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

console.log("MongoDB URI:", process.env.MONGODB_URI);

// Initialize express app
const app = express();
app.use(express.json());
app.use(cors());

// Define Mongoose Schema & Model
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  data: String,
  image: String
});

const Book = mongoose.model('MY_BOOK', BookSchema); // NOTE: Mongoose auto-pluralizes collection names

// POST route to add a book
app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body); // ✅ fixed typo
    await newBook.save();
    res.status(201).json({
      message: 'Book added successfully',
      book: newBook
    });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).send('Server Error');
  }
});

app.get('/books', async (req, res) => {
  try {
    console.log("Fetching books...");
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Server Error');
  }
})

app.delete('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).send('Server Error');
  }
})

// PUT /books/:id
app.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update book' });
  }
});


// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(9000, () => {
      console.log("🚀 Server is running on port 9000");
    });
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
  });
