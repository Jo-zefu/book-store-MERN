import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/update/:id" element={<UpdateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
    </Routes>
  )
}

export default App
