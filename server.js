const express = require("express");

const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Python Basics",
    author: "John Smith"
  }
];


app.get("/books", (req, res) => {
  res.json(books);
});


app.get("/books/:id", (req, res) => {
  const book = books.find(
    b => b.id === parseInt(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.json(book);
});


app.post("/books", (req, res) => {

  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});


app.put("/books/:id", (req, res) => {

  const book = books.find(
    b => b.id === parseInt(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});


app.delete("/books/:id", (req, res) => {

  books = books.filter(
    b => b.id !== parseInt(req.params.id)
  );

  res.json({
    message: "Book deleted"
  });
});


app.listen(3000, () => {
  console.log(
    "Library API running on port 3000"
  );
});
