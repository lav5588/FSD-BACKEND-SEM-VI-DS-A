import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteBook from './DeleteBook';

const ViewBook = () => {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    try {
      console.log("Fetching books...");
      const response = await axios.get('http://localhost:9000/books');
      console.log("data:", response.data);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">📚 Book List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div 
            key={book._id} 
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-gray-700">{book.title}</h2>
            <h3 className="text-xl text-gray-600">{book.author}</h3>
            <h4 className="text-gray-500">{book.data}</h4>
            {book.image && (
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-40 h-60 object-cover rounded-md mt-4 shadow-md" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBook;
