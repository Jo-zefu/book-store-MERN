import {useState} from 'react'
import BackButton from "../components/BackButton.jsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import {useSnackbar} from "notistack";

const DeleteBook = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleDelete = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`).then(res => {
      setLoading(false);
      enqueueSnackbar("Successfully deleted", {variant: "success"});
      navigate("/");
    }).catch(err => {
      console.log(err.message);
      enqueueSnackbar("Failed to delete book", {variant: "error"});
      setLoading(false)});
  }
  return (
    <divc className="p-4">
      <BackButton/>
      <h1 className="text-3xl text-left py-4">Delete Book</h1>
      {loading?<Spinner/>:''}
      <div className="border-2 border-sky-400 flex flex-col gap-4 justify-center items-center rounded-xl p-8 mx-auto max-w-[600px]">
        <h3 className="text-2xl">Are you sure delete this book?</h3>
        <button type='button' className="bg-red-500 text-white m-x-8 w-full p-4" onClick={handleDelete}>Yes, Delete it</button>
      </div>
    </divc>
  )
}
export default DeleteBook
