const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, default: "N/A" },
  author: String,
  url: {type: String, required: true },
  date: { type: Date, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
