import express from "express";
import {Book} from "../models/bookModel.js";

const router = express.Router();

// route for save a new book
router.post('/', async (request, response) => {
  try {
    if (!request.body.title
      || !request.body.author
      || !request.body.publishYear) {
      return response.status(400).send("Please enter all required fields: title, author, publishYear")
    }
    const newBook = new Book({
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    })
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    return response.status(500).send({message: err.message});
  }
})

// route for get all books
router.get('/', async (request, response) => {
  try{
    const allBooks = await Book.find({})
    return response.status(200).json({count: allBooks.length, data: allBooks})
  } catch(err) {
    console.log(err.message);
    return response.status(500).send({message: err.message});
  }
})

// route for get one book from books by id
router.get('/:bookId', async (request, response) => {
  try{
    const {bookId} = request.params
    const oneBook = await Book.findById(bookId)
    return response.status(200).json(oneBook)
  } catch (err) {
    console.log(err.message);
    return response.status(500).send({message: err.message});
  }
})
// route for update a book
router.put('/:bookId', async (request, response) => {
  try{
    if (!request.body.title
      || !request.body.author
      || !request.body.publishYear) {
      return response.status(400).send("Please enter all required fields: title, author, publishYear")
    }
    const {bookId} = request.params
    const result = await Book.findByIdAndUpdate(bookId, request.body)
    if (!result) {
      return response.status(404).json("Book not found")
    }
    return response.status(201).send("Book updated successfully.")
  } catch (err) {
    console.log(err.message);
    return response.status(500).send({message: err.message});
  }
})

// route for delete a book
router.delete('/:bookId', async (request, response) => {
  try {
    const {bookId} = request.params

    const result = await Book.findByIdAndDelete(bookId)
    if(!result) {
      return response.status(404).json("Book not found")
    }
    return response.status(201).send("Book deleted successfully.")
  } catch (err) {
    console.log(err.message);
    return response.status(500).send({message: err.message});
  }
})

export default router;
