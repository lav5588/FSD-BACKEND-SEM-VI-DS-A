import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import SearchBook from './components/SearchBook'
import UpdateBook from './components/UpdateBook'
import DeleteBook from './components/DeleteBook'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddBook/>}></Route>
        <Route path='/view' element={<ViewBook/>}></Route>
        <Route path='/search' element={<SearchBook/>}></Route>
        <Route path='/update' element={<UpdateBook/>}></Route>
        <Route path='/delete' element={<DeleteBook/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App