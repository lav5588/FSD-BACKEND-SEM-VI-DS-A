import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatDate } from '../utils/formatdate';

const DeleteBook = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://fsd-backend-sem-vi-ds-a-1.onrender.com/books');
      setBooks(response.data);
    } catch (err) {
      console.error('❌ Error fetching books:', err);
      setError('Failed to fetch books');
    }
  };

  // Delete a book
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://fsd-backend-sem-vi-ds-a-1.onrender.com/books/${id}`);
      alert('📚 Book Deleted Successfully!');
      // Remove deleted book from local state
      setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    } catch (err) {
      console.error('❌ Error deleting book:', err);
      setError('Failed to delete book');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">📚 Delete Books</h1>

      {error && <div className="text-red-600 font-semibold mb-4">{error}</div>}

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-left">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Author</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">{book.title}</td>
                <td className="py-3 px-4">{book.author}</td>
                <td className="py-3 px-4">{formatDate(book.date) || 'N/A'}</td>
                <td className="py-3 px-4">
                  {book.image ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded-md shadow-sm"
                    />
                  ) : (
                    <span className="text-gray-400 italic">No Image</span>
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-500 text-white font-bold px-4 py-1 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Delete 🗑️
                  </button>
                </td>
              </tr>
            ))}
            {books.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-5 text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteBook;
