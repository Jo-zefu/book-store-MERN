import {useEffect, useState} from 'react'
import Spinner from "../components/Spinner.jsx";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {MdOutlineAddBox} from "react-icons/md";
import BooksCard from "../components/home/BooksCard.jsx";
import BooksTable from "../components/home/BooksTable.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');


  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:5555/books').then(res => {
      setBooks(res.data.data);
      setLoading(false);
    }).catch(err => {
      console.log(err)
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 text-white px-4 py-1 rounded-xl" onClick={() => setShowType('table')}>
          Table
        </button>
        <button className="bg-sky-300 hover:bg-sky-600 text-white px-4 py-1 rounded-xl" onClick={() => setShowType('card')}>
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox  className="text-sky-800 text-4xl"/>
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? (
        <BooksTable books={books}/>
      ): (<BooksCard books={books} />)}
    </div>
  )
}
export default Home
