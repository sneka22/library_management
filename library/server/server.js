const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Book = mongoose.model('Book', {
  title: String,
  author: String,
});

app.post('/books', async (req, res) => {
  const { title, author } = req.body;
  try {
    const book = new Book({ title, author });
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});











// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb://127.0.0.1:27017/library', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB database');
// });

// // Define your routes and controllers here...

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
