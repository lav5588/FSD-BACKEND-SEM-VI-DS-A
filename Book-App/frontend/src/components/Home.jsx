import React from 'react';
import { Link } from 'react-router-dom'; // if you're using react-router

const Home = () => {
    const featuredBooks = [
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            image: 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg',
        },
        {
            title: 'Atomic Habits',
            author: 'James Clear',
            image: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
        },
        {
            title: 'Rich Dad Poor Dad',
            author: 'Robert T. Kiyosaki',
            image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center">
            {/* Hero Section */}
            <div className="text-center mt-20">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">📚 Welcome to BookVerse</h1>
                <p className="text-xl text-gray-600 max-w-xl mx-auto">
                    Discover, Manage, and Explore your favorite books effortlessly.
                </p>
                <Link to="/view">
                    <button className="mt-6 bg-blue-600 text-white px-6 py-2 text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                        Get Started 🚀
                    </button>
                </Link>
            </div>

            {/* Featured Books */}
            <div className="mt-16 w-full px-6 max-w-6xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">✨ Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {featuredBooks.map((book, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-40 h-60 object-cover rounded mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-700">{book.title}</h3>
                            <p className="text-gray-500">{book.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
