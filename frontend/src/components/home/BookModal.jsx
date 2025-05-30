import React from 'react'
import {AiOutlineClose} from "react-icons/ai";
import {PiBookOpenTextLight} from "react-icons/pi";
import {BiUserCircle} from "react-icons/bi";

const BookModal = ({book, onClose}) => {
  return (
    <div className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center " onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
           className="w-[600px] max-w-full max-h-[400px] overflow-y-scroll bg-white rounded-xl p-4 flex flex-col relative">
        <AiOutlineClose className="absolute top-6 right-6 cursor-pointer text-3xl text-red-600" onClick={onClose}/>
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">{book.publishYear}</h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex items-center justify-start gap-x-2 my-4">
          <PiBookOpenTextLight className="text-red-300 text-2xl"/>
          <h2>{book.title}</h2>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl"/>
          <h2>{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          React batches state updates. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event. In the rare case that you need to force React to update the screen earlier, for example to access the DOM, you can use flushSync.
        </p>
      </div>
    </div>
  )
}
export default BookModal
