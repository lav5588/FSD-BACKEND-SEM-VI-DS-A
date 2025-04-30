import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBook = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch books on load
  const fetchBooks = async () => {
    try {
      const res = await axios.get('https://fsd-backend-sem-vi-ds-a-1.onrender.com/books');
      setBooks(res.data);
      console.log('Books fetched:', res.data);
      setFilteredBooks(res.data); // initialize filtered list
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Filter logic (local search)
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">🔍 Search Books</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-6 px-4 py-2 border border-gray-300 rounded-md w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-left">
            <tr>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Author</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book._id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{book.title}</td>
                  <td className="py-3 px-4">{book.author}</td>
                  <td className="py-3 px-4">{book.date || 'N/A'}</td>
                  <td className="py-3 px-4">
                    {book.image ? (
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-20 h-28 object-cover rounded shadow"
                      />
                    ) : (
                      <span className="text-gray-400 italic">No Image</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
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

export default SearchBook;
