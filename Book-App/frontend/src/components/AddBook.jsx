import React from 'react';
import axios from 'axios';

const AddBook = () => {
    const handleBook = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const author = e.target.author.value;
        const date = e.target.date.value;
        const image = e.target.image.value;
        const books = { title, author, date, image };

        await axios.post('http://localhost:9000/books', books);
        alert('📚 Book Added Successfully!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">📖 Add a New Book</h1>
            <form 
                onSubmit={handleBook} 
                className="bg-white shadow-lg rounded-lg p-6 w-96"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Author</label>
                    <input 
                        type="text" 
                        name="author" 
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Date</label>
                    <input 
                        type="date" 
                        name="date" 
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Image URL</label>
                    <input 
                        type="text" 
                        name="image" 
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                        required 
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Add Book 📚
                </button>
            </form>
        </div>
    );
};

export default AddBook;
