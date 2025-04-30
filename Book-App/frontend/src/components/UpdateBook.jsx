import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [books, setBooks] = useState([]);
  const [editBookId, setEditBookId] = useState(null); // ID of the book being edited
  const [editedData, setEditedData] = useState({});   // Temp state to hold form input

  const fetchBooks = async () => {
    try {
      const res = await axios.get('https://fsd-backend-sem-vi-ds-a-1.onrender.com/books');
      setBooks(res.data);
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEdit = (book) => {
    setEditBookId(book._id);
    setEditedData({
      title: book.title,
      author: book.author,
      date: book.date,
      image: book.image,
    });
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`https://fsd-backend-sem-vi-ds-a-1.onrender.com/books/${id}`, editedData);
      alert('✅ Book updated successfully!');
      setEditBookId(null);
      fetchBooks(); // Re-fetch updated books
    } catch (err) {
      console.error('Error updating book:', err);
      alert('❌ Failed to update book');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">📘 Update Book Table</h1>

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-left">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Author</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Image URL</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-4">
                  {editBookId === book._id ? (
                    <input
                      name="title"
                      value={editedData.title}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    book.title
                  )}
                </td>
                <td className="py-3 px-4">
                  {editBookId === book._id ? (
                    <input
                      name="author"
                      value={editedData.author}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    book.author
                  )}
                </td>
                <td className="py-3 px-4">
                  {editBookId === book._id ? (
                    <input
                      name="date"
                      value={editedData.date}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    book.date || 'N/A'
                  )}
                </td>
                <td className="py-3 px-4">
                  {editBookId === book._id ? (
                    <input
                      name="image"
                      value={editedData.image}
                      onChange={handleInputChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded shadow"
                    />
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  {editBookId === book._id ? (
                    <button
                      onClick={() => handleSave(book._id)}
                      className="bg-green-500 text-white font-bold px-4 py-1 rounded hover:bg-green-600 transition duration-300"
                    >
                      Save 💾
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(book)}
                      className="bg-blue-500 text-white font-bold px-4 py-1 rounded hover:bg-blue-600 transition duration-300"
                    >
                      Update ✏️
                    </button>
                  )}
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

export default UpdateBook;
