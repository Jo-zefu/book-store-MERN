import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from 'notistack'

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const handleSave = () => {
    const data = {title, author, publishYear};
    setLoading(true);
    axios.post("http://localhost:5555/books", data).then((res) => {
      setLoading(false);
      enqueueSnackbar("Successfully created book", {variant: "success"});
      navigate("/");
    }).catch(err => {
      console.log(err);
      enqueueSnackbar("Error", {variant: "error"});
      setLoading(false);
    });
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-left text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : (
        <div className="flex flex-col gap-y-4 border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="flex flex-col items-start gay-y-2">
            <label className="text-gray-500 text-xl">Title</label>
            <input type={"text"} value={title} className="border-2 border-gray-500 w-full" onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="flex flex-col items-start gay-y-2">
            <label className="text-gray-500 text-xl">Author</label>
            <input type={"text"} value={author} className="border-2 border-gray-500 w-full"  onChange={(e) => setAuthor(e.target.value)}/>
          </div>
          <div className="flex flex-col items-start gay-y-2">
            <label className="text-gray-500 text-xl">Publish Year</label>
            <input type={"text"} value={publishYear} className="border-2 border-gray-500 w-full"  onChange={(e) => setPublishYear(e.target.value)}/>
          </div>
          <button type="submit" onClick={handleSave} className="bg-sky-300 text-white">Save</button>
        </div>
      )}
    </div>
  )
}
export default CreateBooks
