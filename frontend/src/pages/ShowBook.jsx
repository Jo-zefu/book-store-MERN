import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";

const ShowBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`).then(res => {
      setBook(res.data);
      setLoading(false);
    }).catch(err => {
      console.log(err);
      setLoading(false);
    })
  }, [])
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl text-left my-4">Show Book</h1>
      { loading ? <Spinner /> :
        (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 gap-y-4">
            <div className="flex items-center gap-x-4">
              <span className="text-xl text-gray-500">Id</span>
              <span>{book?._id}</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-xl text-gray-500">Title</span>
              <span>{book?.title}</span>
            </div>
            <div className="flex tems-center gap-x-4">
              <span className="text-xl text-gray-500">Author</span>
              <span>{book?.author}</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-xl text-gray-500">Publish Year</span>
              <span>{book?.publishYear}</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-xl text-gray-500">Create Time</span>
              <span>{new Date(book?.createdAt).toString()}</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-xl text-gray-500">Last Update Time</span>
              <span>{new Date(book?.updatedAt).toString()}</span>
            </div>
          </div>
        )}
    </div>
  )
}
export default ShowBook
