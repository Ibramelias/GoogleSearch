
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, require: true},
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    description: { type: String, require: true},
    image: { type: String, require: true},
    link: { type: String, required: true}
})

const BooksList = mongoose.model("BookList", bookSchema);

module.exports = BooksList;