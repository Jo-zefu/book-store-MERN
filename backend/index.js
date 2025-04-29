import express from 'express';
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(cors({
//   origin: 'http://localhost:3000',
//   method: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }))

app.get('/', (request, response) => {
  console.log(request)
  return response.status(234).send("Welcome to the Bookstore.")
})
app.use("/books", booksRoute);

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    })
  }).catch(err => console.log(err))

