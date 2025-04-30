import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-gray-500 text-white'>
            <Link to="/" className='hover:bg-gray-600 p-2 rounded-md'>Home</Link>
            <Link to="/add" className='hover:bg-gray-600 p-2 rounded-md'>Add Book</Link>
            <Link to="/view" className='hover:bg-gray-600 p-2 rounded-md'>View Book</Link>
            <Link to="/search" className='hover:bg-gray-600 p-2 rounded-md'>Search Book</Link>
            <Link to="/update" className='hover:bg-gray-600 p-2 rounded-md'>Update Book</Link>
            <Link to="/delete" className='hover:bg-gray-600 p-2 rounded-md'>Delete Book</Link>
        </nav>
    )
}

export default NavBar
