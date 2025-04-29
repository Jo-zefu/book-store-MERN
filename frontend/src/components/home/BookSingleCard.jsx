import React, {useState} from 'react'
import {PiBookOpenTextLight} from "react-icons/pi";
import {BiUserCircle, BiShow} from "react-icons/bi";
import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";
import BookModal from "./BookModal.jsx";

const BookSingleCard = ({book}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div key={book._id} className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute right-2 top-1 px-4 py-1 bg-red-300 rounded-lg">{book.publishYear}</h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex items-center justify-start gap-x-2 my-4">
        <PiBookOpenTextLight className="text-red-300 text-2xl"/>
        <h2>{book.title}</h2>
      </div>
      <div className="flex items-center justify-start gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl"/>
        <h2>{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer"  onClick={() => setShowModal(true)} />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-green-800 hover:text-black text-2xl cursor-pointer"/>
        </Link>
        <Link to={`/books/update/${book._id}`}>
          <AiOutlineEdit className="text-yellow-600 text-2xl hover:text-black cursor-pointer"/>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-600 text-2xl hover:text-black cursor-pointer"/>
        </Link>
      </div>
      {
        showModal ? <BookModal book={book} onClose={() => setShowModal(false)} /> : null
      }
    </div>
  )
}
export default BookSingleCard
